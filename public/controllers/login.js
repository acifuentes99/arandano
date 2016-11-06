todoApp.controller('Login', function($rootScope,$http, $scope, $location, arandanoBDExperto, shareData, Experto){

	this.data = {};
	var aux;
	var that = this;


	this.submitLoginEstudiante = function(){
		console.log(that.est.data);
		$http.post('/api/login/est', that.est.data)
			.then(function(res){
				if(res.data.login === 1){
					$location.path('/dashboard');
				}
		});
	};


	/*
    this.submitLoginExperto = function(){
		console.log(that.exp.data);
		$http.post('/api/login/exp', that.exp.data)
			.then(function(res){
				if(res.data.login === 1){
					$location.path('/dash_exp');
				}
			});
	};
	*/
	console.log(Experto);
	this.submitLoginExperto = function(){
		Experto.loadExperto(that.exp.data);
	}

    this.submitLoginProfesor = function(){
		console.log("profesor data: "+that.pro.data);
		$http.post('/api/login/pro', that.pro.data)
			.then(function(res){
				if(res.data.login === 1){
					$location.path('/dash_exp');
				}
			});
    };
    
});


/*
 * aloja
 * 1234
 *
 *
 * andrew123
 * 1234
 * */



		/*
		 //Intento con .get , que es inseguro para passwords
		arandanoBDExperto.getData(this.data.user, function(data){
			aux = data;
			//console.log(aux.data[0].exp_pass);
			if(that.data.pass === aux.data[0].exp_pass) $location.path('/dashboard');
			else{
				$("#wrongpass").fadeIn(1000).css("display","block");
			}

		}); 
		*/
