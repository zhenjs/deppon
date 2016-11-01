import $ from './jquery.js';
import './slide.js';
import '../less/index.less';


var index1 = 0;
var allNum = 5;
var flag = true;

//导航栏
$('.search1').eq(0).on('mouseenter', function () {
	$('.city-search').css('display', 'block')
})
$('.city-search').on('mouseleave', function () {
	$('.city-search').css('display', 'none')
})
$('.city-title li').on('mouseenter', function () {
	$('.search').css('display', 'none')
	$('.search').eq($(this).index()).css('display', 'block');
 	$('.city-title li').css('background', '#fff')
	$(this).css({
		background: '#494e7b',
		cursor: 'pointer',
	})
})


//生成翻页组件
function createPage(nowNum, allNum, data) {

	var len = (nowNum + 1) * 10;
	for( var i = 0; i < allNum; i++){
		var $A = $('<a href="#1">').eq(0);
		$A.href = '#' + 1
		$A.css('href', '#1').html(i + 1).attr('class', 'button11').appendTo($('#page'));
	}
	if(nowNum > 0) {
		var $A = $('<a href="#1">').eq(0);
		$A.css({
			position: 'absolute',
			left: '50%',
			marginLeft: '-160px'
		}).html('上一页').appendTo($('#page')).attr('id', 'buttonLeft');
	}
	if(nowNum + 1 < allNum) {
		var $A = $('<a href="#1">').eq(0);
		$A.css({
			position: 'absolute',
			left: '50%',
			marginLeft: '89px'
		}).html('下一页').appendTo($('#page')).attr('id', 'buttonRight');
	}

	$('.button11').eq(nowNum).addClass('listColor')
	$('.button11').one('mousedown', function () {
		$('.button1').removeClass('listColor');
		$(this).addClass('listColor');
		nowNum = $(this).index();
		$('#page').eq(0).html('');
		createPage(nowNum, allNum, data);

	})
	$('#buttonRight').eq(0).on('mousedown', function () {
		console.log(1);
		$('#page').eq(0).html('');
		nowNum++;
		createPage(nowNum, allNum, data);
	})
	$('#buttonLeft').eq(0).on('mousedown', function () {
		$('#page').eq(0).html('');
		nowNum--;
		createPage(nowNum, allNum, data);
	})
		//处理JSON
	    for(var i = len - 10; i < len; i ++) {
	    	if(i < data.length){
				$('.spl').eq((i % 10) + 1).html('<a href="#1">' + data[i].name + '</a>');
				$('.spl1').eq((i % 10) + 1).html(data[i].address);
				$('.splm').eq((i % 10) + 1).html(data[i].salary);
				$('.splw').eq((i % 10) + 1).html(data[i].experience);
				$('.spls').eq((i % 10) + 1).html(data[i].degree);
				$('.date').eq((i % 10) + 1).html(data[i].time);
			} else {
				$('.spl').eq((i % 10) + 1).html('');
				$('.spl1').eq((i % 10) + 1).html('');
				$('.splm').eq((i % 10) + 1).html('');
				$('.splw').eq((i % 10) + 1).html('');
				$('.spls').eq((i % 10) + 1).html('');
				$('.date').eq((i % 10) + 1).html('');
			}
		}


}
//ajax
function getData(url, cb) {
	$.ajax({
		type: 'get',
		url: url,
		success: cb,
		error: function () {
			alert('出错了')
		}
	})
}

getData('./src/data/wuliu.txt', success)
//回调
function success(data) {
	data = JSON.parse(data)
    createPage(index1, allNum, data)
}

