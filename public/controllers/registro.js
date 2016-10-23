todoApp.controller('Registro', function($rootScope, $scope, $location, arandanoBDExperto, shareData){

    this.stu = {
        'nombre': '',
        'nickname': '',
        'email': ' ',
        'password': '',
        'tipon': 0,
        'tipo': ''
    };

	this.checkPass = function(){
		var aux = this.stu;
		if(aux.password !== aux.password2){
			$("pass2").css("display", "block")
			console.log("password dosent match");	
		}
		else{
			$("#pass2").css("display", "block")
			console.log("password matches!");
		}	
	}

    this.submitReg = function(){
        console.log('Holaa!');
        console.log($scope);

		//shareData.set(this.stu);
        arandanoBDExperto.saveData(this.stu)
        .then(function(){
            $location.path('/regexitoso');
        });
    };
    
});
