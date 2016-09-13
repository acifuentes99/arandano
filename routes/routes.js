var path = process.cwd();

module.exports = function (app, connection) {

    app.route('/')
    .get(function(req, res) {
        //res.sendfile(process.cwd() + '/public/index.html');
        res.render('index.html');
    });

    app.route('/api')
    .get(function(req, res) {
        connection.query('SELECT * FROM Estudiante ', function(err, rows){
            res.json(rows);
        });
    })
    .post(function(req, res){
        var f = req.body;
        connection.query("INSERT INTO `Estudiante` (`nickname`, `nombre`, `email`, `password`, `tipo`) VALUES ('"+f.nickname+"', '"+f.nombre+"', '"+f.email+"', '"+f.pass+"', '"+f.tipon+"')", function(err, rows){
            res.json(rows); 
        });
    });
};



