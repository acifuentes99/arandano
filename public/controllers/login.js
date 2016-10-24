todoApp.controller('Login', function($rootScope,$http, $scope, $location, arandanoBDExperto, shareData){

	this.data = {};
	var aux;
	var that = this;

    this.submitLogin = function(){
		//var aux = arandanoBDExperto.getData(this.data.user);
		
		//arandanoBDExperto.sendLogin(that.data);
		//arandanoBDExperto.consol();

		console.log(that.data);
		$http.post('/api/login', that.data)
			.then(function(res){
				if(res.data.login === 1){
					$location.path('/dash_exp');
				}
			})
		;


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
    };
    
});


/*
 * aloja
 * 1234
 * */
