var path = process.cwd();

module.exports = function (app) {

    app.route('/')
        .get(function(req, res) {
            //res.sendfile(process.cwd() + '/public/index.html');
            res.render('index.html');
        });
};



