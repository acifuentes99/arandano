todoApp.controller('Dash_exp', function($rootScope,$http, $scope, $location, arandanoFactory, shareData, $route){

    this.stu = {
		nombrecurso: '',
		desccurso: '',
		imgurl: ''
    };
	var that = this;

	//this.theData = cursosData;
	//this.theData = 'olfdsafsdaljfal';

	console.log("En controlador, Data = "+this.theData);

    var that = this;

    this.submitCurso = function(){
        console.log("algo");
		$http.post('/api/curso', that.stu)
        .then(function(){
            $route.reload();
        });
    };

    this.verCursos = function(){
        $http.get('/api/curso/1')
            .then(function(res){
               console.log(res);
				that.theCursos = res.data;
               //colocar variable para coloar en la pagina
            })
        ;
    }
    

});
