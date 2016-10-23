todoApp.controller('Login', function($rootScope, $scope, $location, arandanoBDExperto, shareData){

	this.data = {};

    this.submitLogin = function(){
        console.log('Holaa!');
        console.log($scope);

        var aux = arandanoBDExperto.getData(this.data.user);
		console.log(this.data.user);
		console.log(aux);
		console.log(aux.state);

		/*
        .then(function(){
            $location.path('/dashboard');
		});
		*/
    };
    
});


/*
 * aloja
 * 1234
 * */
