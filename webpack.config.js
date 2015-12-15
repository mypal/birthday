var path = require('path');
var webpack = require('webpack');

var plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),

    new webpack.NoErrorsPlugin()
];
if (process.env.NODE_ENV == 'production') {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        test: /(\.jsx|\.js)$/,
        compress: {
            warnings: false
        }
    }));
} else {
    plugins.push(new webpack.HotModuleReplacementPlugin());
}


module.exports = {
    devtool: process.env.NODE_ENV == 'production'
        ? false
        : 'cheap-module-eval-source-map',
    entry: process.env.NODE_ENV == 'production'
        ? ['./index']
        : ['webpack-hot-middleware/client', './index'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/purelf/static/'
    },
    plugins: plugins,
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/,
            include: __dirname
        }, {
            test: /\.less$/,
            loaders: ['style-loader!css-loader!less-loader'],
            exclude: /node_modules/,
            include: __dirname
        }, {
            test: /\.css$/,
            loaders: ['style-loader!css-loader'],
            exclude: /node_modules/,
            include: __dirname
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192',
            exclude: /node_modules/,
            include: __dirname
        }]
    }
};
