todoApp.controller('Encuesta', function($rootScope, $scope, $location, arandanoFactory, shareData){

    this.stu = {
        'nombre': '',
        'nickname': '',
        'email': ' ',
        'password': '',
        'tipon': 0,
        'tipo': ''
    };

	this.checkResp = function(resp, index){
		console.log("changing resp");
		var ec = resp.ec;
		var or = resp.or;
		var ca = resp.ca;
		var ea = resp.ea;
		console.log("ec: "+ec+"; or: "+or+"; ca: "+ca+"; ea: "+ea);
		if(resp.ec && resp.or && resp.ca && resp.ea){
			if(
				ec===or || ec===ca || ec===ea ||
				or===ca || or===ea || ca===ea 	){
				resp.check = false;
				$("#incom"+index).css("display", "block")
					//console.log("bad!");
			}
			else{
				//console.log("good!");
				$("#incom"+index).css("display", "none")
				resp.check = true;	
			}
		}
	}
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

    this.submitEncuesta = function(){
        console.log('Holaa!');
        console.log($scope);
        console.log(this.respuestas);
        var ec = 0, or = 0, ca = 0; ea = 0;
        this.respuestas.forEach(function(asd){
			  ec += asd.ec;  
			  or += asd.or;  
			  ca += asd.ca;  
			  ea += asd.ea;
			if(!asd.check){
				return false;
			}
        });
        var caec = ca - ec;
        var eaor = ea - or;

        if(eaor > 0 && caec < 0){
            this.stu.tipo = 'Adaptador';
            this.stu.tipon = 1;
        }
        else if(eaor < 0 && caec < 0){
            this.stu.tipo = 'Divergente'
            this.stu.tipon = 2;
        }
        else if(eaor > 0 && caec > 0){
            this.stu.tipo = 'Convergente'
            this.stu.tipon = 3;
        }
        else{
            this.stu.tipo = 'Asimilador'
            this.stu.tipo_n = 4;
        }
        console.log(ca+' '+ec+' '+or+' '+ea);
        console.log($scope);

        shareData.set(this.stu);
        arandanoFactory.saveData(this.stu)
        .then(function(){
            $location.path('/dashboard');
        });
    };
    

    this.results = {
        'ec': 0,
        'or': 0,
        'ca': 0,
        'ea': 0
    };

    this.respuestas = [];

    this.preguntas = [
        {
            'titulo': 'Cuando aprendo...' ,
            'ec': 'me gusta vivir sensaciones',
            'or': 'me gusta pensar sobre ideas',
            'ca': 'me gusta estar haciendo cosas',
            'ea': 'me gusta observar y escuchar'
        },

        {
            'titulo': 'Aprendo mejor cuando' ,
            'ec': 'escucho y observo cuidadosamente',
            'or': 'Confío en el pensamiento lógico',
            'ca': 'confío en mi intuición y sentimientos',
            'ea': 'trabajo duro para lograr hacer las cosas'
        },
        {
            'titulo': 'Cuando estoy aprendiendo..' ,
            'ec': 'tiendo a usar el razonamiento',
            'or': 'soy responsable con lo que hago',
            'ca': 'soy callado y reservado',
<<<<<<< HEAD
            'ea': 'tengo fuertes sensasiones y reacciones'
=======
            'ea': 'tengo fuertes sensaciones y reacciones'
>>>>>>> 5e9f5e029e705c0595de4ca9c49e80a2c2814a4f
        },
        {
            'titulo': 'Yo aprendo..' ,
            'ec': 'Sintiendo',
            'or': 'Haciendo',
            'ca': 'Observando',
            'ea': 'Pensando'
        },
        {
            'titulo': 'Cuando aprendo...' ,
<<<<<<< HEAD
            'ec': 'estoy abierto a nuevas experiencias',
            'or': 'observo todos los aspectos del asunto',
            'ca': 'me gusta analizar las cosas, descomponerlas en sus partes',
            'ea': 'me gusta probar e intentar hacer las cosas'
=======
            'ec': 'Estoy abierto a nuevas experiencias',
            'or': 'Observo todos los aspectos del asunto',
            'ca': 'Me gusta analizar las cosas, descomponerlas en sus partes',
            'ea': 'Me gusta probar e intentar hacer las cosas'
>>>>>>> 5e9f5e029e705c0595de4ca9c49e80a2c2814a4f
        },
        {
            'titulo': 'Cuando estoy aprendiendo..' ,
            'ec': 'soy una persona observadora',
            'or': 'soy una persona activa ',
            'ca': 'soy una persona intuitiva',
            'ea': 'soy una persona lógica'
        },
        {
            'titulo': 'Yo aprendo mejor de...' ,
<<<<<<< HEAD
            'ec': 'la observación',
            'or': 'la relación con otras personas',
            'ca': 'las teorías racionales',
            'ea': 'la oportunidad de probar y practicar'
=======
            'ec': 'La observacón',
            'or': 'La relacion con otras personas',
            'ca': 'Las teorias racionales',
            'ea': 'La oportunidad de probar y practicar'
>>>>>>> 5e9f5e029e705c0595de4ca9c49e80a2c2814a4f
        },
        {
            'titulo': 'Cuando aprendo...' ,
            'ec': 'me gusta ver los resultados de mi trabajo',
<<<<<<< HEAD
            'or': 'me gustan las ideas y las teorías',
            'ca': 'me tomo mi tiempo antes de actuar',
=======
            'or': 'me gustan las ideas y las teorias',
            'ca': 'me tomo mi timepo antes de actuar',
>>>>>>> 5e9f5e029e705c0595de4ca9c49e80a2c2814a4f
            'ea': 'me siento personalmente involucrado en las cosas'
        },
        {
            'titulo': 'Aprendo mejor cuando...' ,
<<<<<<< HEAD
            'ec': 'confío en mis observaciones',
            'or': 'confío en mis sentimientos',
=======
            'ec': 'confio en mis observaciones',
            'or': 'confio en mis sentimientos',
>>>>>>> 5e9f5e029e705c0595de4ca9c49e80a2c2814a4f
            'ca': 'puedo probar por mi cuenta',
            'ea': 'confío en mis ideas'
        },
        {
            'titulo': 'Cuando estoy aprendiendo...' ,
            'ec': 'soy una persona reservada',
            'or': 'soy una persona receptiva',
            'ca': 'soy una persona responsable',
            'ea': 'soy una persona racional'
        },
        {
            'titulo': 'Cuando aprendo...' ,
            'ec': 'me involucro',
            'or': 'me gusta observar',
            'ca': 'evaluó las cosas',
            'ea': 'me gusta ser activo'
        },
        {
            'titulo': 'Aprendo mejor cuando..' ,
            'ec': 'analizo ideas',
            'or': 'soy receptivo y abierto',
            'ca': 'soy cuidadoso',
            'ea': 'soy practico'
        }
    ];
});
