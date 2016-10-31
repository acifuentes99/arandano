todoApp.controller('Dashboard', function($rootScope, $scope, $location, arandanoFactory, shareData, $http){
    this.stu = shareData.get();
    this.algo = "un text";
	var that = this;


    this.loadEstudiante = function(){
		console.log("iniciando metodo getstudent");
		$http.get('/api/login/est/')
            .then(function(res){
				console.log("In student!!!, the user fecthed:")
				console.log(res);
				if(res.data.status === -1 || !res.data.stu_id){
					$location.path("/");	
				}
				else{
				   console.log(res);
					that.theStudent = res.data;
				   //colocar variable para coloar en la pagina
					//
					switch(that.theStudent.tipo){
						case 0:
							that.stu.tipo = "Adaptador";
							break;
						case 1:
							that.stu.tipo = "Divergente";
							break;
						case 2:
							that.stu.tipo = "Convergente";
							break;
						case 3:
							that.stu.tipo = "Asimilador";
							break;

					}
				}
            });
	}

});

