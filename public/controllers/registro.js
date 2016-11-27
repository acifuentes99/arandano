todoApp.controller('Registro', function($rootScope, $scope, $location, arandanoBDExperto, Profesor, shareData){

    this.stu = {
        'nombre': '',
        'nickname': '',
        'email': '',
        'password': '',
        'password2': '',
        'tipon': 0,
        'clase': ''
    };
	this.errMsg = {show: false, msg: '', show2: false, msg2: 'Passwords no calzan'};
	var that = this;

	this.checkPass = function(){
		var aux = that.stu;
		if(aux.password !== aux.password2){
			that.errMsg.show2 = true;
			return false;
		}
		else{
			that.errMsg.show2 = false;
			return true;
		}	
	}

	this.checkReg = function(){
		var campos = [];
		var valid = true;
		that.errMsg.msg = "Falta rellenar los campos: ";
		if(that.stu.clase === ''){ that.errMsg.msg = that.errMsg.msg.concat("tipo de usuario, ");valid=false;}
		if(that.stu.nombre === ''){ that.errMsg.msg = that.errMsg.msg.concat("nombre, ");valid=false;}
		if(that.stu.nickname === ''){ that.errMsg.msg = that.errMsg.msg.concat('nickname, ');valid=false;}
		if(that.stu.email === ''){ that.errMsg.msg = that.errMsg.msg.concat('email, ');valid=false;}
		if(that.stu.password === ''){ that.errMsg.msg = that.errMsg.msg.concat('password, '); valid=false;}
		that.errMsg.show = true;
		return valid;
	}

    this.submitReg = function(){
        console.log($scope);

		if(that.checkPass() && that.checkReg()){
			if(that.stu.clase === 1){
				arandanoBDExperto.saveData(this.stu)
				.then(function(){
					$location.path('/regexitoso');
				});
			}
			else{
				Profesor.addProfesor(that.stu)
					.then(function(){
						$location.path('/regexitoso');
					});
			}
		}
    };
    
});
