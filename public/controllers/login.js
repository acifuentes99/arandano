todoApp.controller('Login', function($rootScope,$http, $scope, $location, arandanoBDExperto, shareData, Experto){

	this.data = {};
	var aux;
	var that = this;
	this.error = {m: 'hola', show: false};
	this.est = {data: {user: '', pass: ''}};
	this.exp = {data: {user: '', pass: ''}};
	this.pro = {data: {user: '', pass: ''}};

	this.errorM = function(aux){
		if(aux.user === ''){
			that.error.m = 'Campo de usuario en blanco';
			that.error.show = true;
		}
		else if(aux.pass === ''){
			that.error.m = 'Campo de password en blanco';
			that.error.show = true;
		}
	}

	this.submitLoginEstudiante = function(){
		if(this.est.data.user === '' || this.est.data.pass === '')
			that.errorM(this.est.data);
		else
			$http.post('/api/login/est', that.est.data)
				.then(function(res){
					console.log("tratando de loguear");
					if(res.data.login === 1){
						$location.path('/dashboard');
					}
					else{
						that.error.show = true;
						that.error.m = res.data.m[0];
					}
			});
	};

	/*
	$http.post("/query", {query: "SELECT * FROM estudiante"})
		.then(function(res){
			console.log(res);
		});
		*/
	//	console.log(Experto);
	this.submitLoginExperto = function(){
		if(this.exp.data.user === '' || this.exp.data.pass === '')
			that.errorM(this.exp.data);
		else Experto.loadExperto(that.exp.data, that);
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
