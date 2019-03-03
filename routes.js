const sampleController = require('./apis/something/sampleController');


module.exports = function(app) {

    /*
     *
     * ping Routes
     * 
     */
    app.get('/ping', (req, res) => {
        return res.send('pong');
    })

 	 /*
     *
     * sample Routes
     * 
     */
    app.get('/list', sampleController.list);

    app.get('/count', sampleController.count);

    app.get('/stats', sampleController.stats);

    app.get('/search', sampleController.search);


}