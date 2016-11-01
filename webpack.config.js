module.exports = {
    entry: './src/js/index.js',
    output: {
        path: __dirname,
        filename: 'out/bundle.js',
        publicPath: 'static',
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', query: { presets: ['react', 'es2015'] }},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
        ]
    }
}