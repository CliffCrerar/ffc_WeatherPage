/* express webpack server */

const 
    express = require('express'),
    middleWare = require('webpack-dev-middleware'),
    webpack = require('webpack'),
    config = require('./webpack.config')
    compiler = webpack(config)
    app = express();

app.use(middleWare(compiler,{
    publicPath: config.output.publicPath
}))

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});