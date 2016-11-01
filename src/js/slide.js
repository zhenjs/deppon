import $ from './jquery';

//通过改变index来轮播
var slide = $('.slide div')
var index = 0;
var flag = true;
function slideLeft() {
	if(flag) {
		flag = false
	slide.eq((index + 1) % 7).animate({
		width: 328,
		height: 190,
		left: 0,
		top: 90,
		opacity: 0.333333,
		'z-index': 0

	})
	slide.eq((index + 2) % 7).animate({
		width: 410,
		height: 237,
		left: 43.3333,
		top: 66.25,
		opacity: 0.5,
		'z-index': 1
	})
	slide.eq((index + 3) % 7).animate({
		width: 512,
		height: 297,
		left: 86.6667,
		top: 36.5625,
		opacity: 1,
		'z-index': 2
	})
	slide.eq((index + 4) % 7).animate({
		width: 640,
		height: 370,
		left: 130,
		top: 0,
		opacity: 1,
		'z-index': 3,
	})
	slide.eq((index + 5) % 7).animate({
		width: 512,
		height: 297,
		left: 301.333,
		top: 37,
		opacity: 1,
		'z-index': 2,
	})
	slide.eq((index + 6) % 7).animate({
		width: 410,
		height: 237,
		left: 447.067,
		top: 66.66,
		opacity: 0.5,
		'z-index': 1,
	})
	slide.eq(index % 7).animate({
		width: 328,
		height: 190,
		left: 572.32,
		top: 90.28,
		opacity: 0.333333,
		'z-index': 0,
	})
	index ++;
	flag = true;
	}
}
function slideRight() {
	if(flag) {
		flag = false;
	slide.eq((index - 1) % 7).animate({
		width: 328,
		height: 190,
		left: 0,
		top: 90,
		opacity: 0.333333,
		'z-index': 0

	})
	slide.eq(index % 7).animate({
		width: 410,
		height: 237,
		left: 43.3333,
		top: 66.25,
		opacity: 0.5,
		'z-index': 1
	})
	slide.eq((index - 6) % 7).animate({
		width: 512,
		height: 297,
		left: 86.6667,
		top: 36.5625,
		opacity: 1,
		'z-index': 2
	})
	slide.eq((index - 5) % 7).animate({
		width: 640,
		height: 370,
		left: 130,
		top: 0,
		opacity: 1,
		'z-index': 3,
	})
	slide.eq((index - 4) % 7).animate({
		width: 512,
		height: 297,
		left: 301.333,
		top: 37,
		opacity: 1,
		'z-index': 2,
	})
	slide.eq((index - 3) % 7).animate({
		width: 410,
		height: 237,
		left: 447.067,
		top: 66.66,
		opacity: 0.5,
		'z-index': 1,
	})
	slide.eq((index - 2) % 7).animate({
		width: 328,
		height: 190,
		left: 572.32,
		top: 90.28,
		opacity: 0.333333,
		'z-index': 0,
	})
	flag = true;
	index--;
	}
}
$('.left').on('click', function () {
	slideLeft()
})
$('.right').on('click', function () {
	slideRight()
})