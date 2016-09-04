var path = process.cwd();

module.exports = function (app) {

    app.route('/')
        .get(function(req, res) {
            //res.sendFile(process.cwd() + '/public/index.html');
            res.render('index.html');
        });
};

