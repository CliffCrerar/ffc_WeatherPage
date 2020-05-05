/* express dev webpack server */
require('dotenv').config();
const
    express = require('express'),
    middleWare = require('webpack-dev-middleware'),
    webpack = require('webpack'),
    config = require('./webpack.config')
    compiler = webpack(config),
    http = require('https'),
    app = express();

app.use(middleWare(compiler, {
    publicPath: config.output.publicPath,
    writeToDisk: false
}))

app.get('/weather', (req, res) => {
    console.log('Received');
    const { lat, long } = req.query
    const { ['API-KEY']: APIKEY, HOST } = process.env;
    options = `${HOST}/${APIKEY}/${lat},${long}`
    dsreq = http.request(options, (dsres) => {
        console.log('Called');
        let payload = '';
        dsres.on('data', data => payload += data)
        
        dsres.on('end',() => {
            // console.log('payload: ', payload);
            console.log('ended');
            res.status(200).send(JSON.parse(payload))
        })
    })
    dsreq.on('error', e => res.status(410).send(e))
    dsreq.end();
})

// Serve the files on port 3000.
app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
});