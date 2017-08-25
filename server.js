var webpack = require('webpack');
var webpackDevMiddleware = require('koa-webpack-dev-middleware');
var webpackHotMiddleware = require('koa-webpack-hot-middleware');
var config = require('./webpack.config');

var app = new require('koa')();
var router = new require('koa-router')();
var sendfile = require('koa-sendfile');
var port = 1235;

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
if (process.env.NODE_ENV != 'production') {
    app.use(webpackHotMiddleware(compiler));
}

router.get("/", function*() {
    yield* sendfile.call(this, __dirname + '/index.html');
});
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, function(error) {
    if (error) {
        console.error(error);
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
    }
});
