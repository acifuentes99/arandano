todoApp.controller('Dash_exp', function($rootScope,$http, $scope, $location, arandanoFactory, shareData, $route, Experto){

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

	/*
    this.loadExperto = function(){
		console.log("iniciando metodo getExperto");
		$http.get('/api/login/exp/')
            .then(function(res){
				console.log(res);
				if(res.data.status === -1){
					$location.path("/");	
				}
				else{
				   console.log(res);
					that.theExpert = res.data;
				}
            });
	}
	*/

	this.theExperto = Experto.authExperto();


    this.submitCurso = function(){
        console.log("algo");
		$http.post('/api/curso', that.stu)
        .then(function(){
            $route.reload();
        });
    };

	/* Con esta supermegafuncion, hago el get al cargar la página
	 * (se llama el método con ng-init en la vista)
		* */
    this.verCursos = function(){
        $http.get('/api/curso/1')
            .then(function(res){
               console.log(res);
				that.theCursos = res.data;
               //colocar variable para coloar en la pagina
            });
    }
    

});
