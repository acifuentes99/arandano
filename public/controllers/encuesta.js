todoApp.controller('Encuesta', function($rootScope, $scope, $location, arandanoFactory, shareData){

    this.stu = {
        'nombre': '',
        'nickname': '',
        'email': '',
        'password': '',
        'tipon': 0,
        'tipo': ''
    };

    this.getResults = function(){
        console.log('Holaa!');
        console.log($scope);
        console.log(this.respuestas);
        var ec = 0, or = 0, ca = 0; ea = 0;
        this.respuestas.forEach(function(asd){
          ec += asd.ec;  
          or += asd.or;  
          ca += asd.ca;  
          ea += asd.ea;  
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
            'or': 'Confio en el pensamiento lógico',
            'ca': 'confio en mi intuición y sentimientos',
            'ea': 'trabajo duro para lograr hacer las cosas'
        },
        {
            'titulo': 'Cuando estoy aprendiendo..' ,
            'ec': 'tiendo a usar el razonamiento',
            'or': 'soy responsable con lo que hago',
            'ca': 'soy callado y reservado',
            'ea': 'tengo fuertes senaciones y reacciones'
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
            'ec': 'estoy abierto a nuevas experiencias',
            'or': 'observo todos los aspectos del asunto',
            'ca': 'me gusta analizar las cosas, descomponerlas en sus aprtes',
            'ea': 'me gusta probar e intentar hacer las cosas'
        },
        {
            'titulo': 'Cando estoy aprendiendo..' ,
            'ec': 'soy una persona observadora',
            'or': 'soy una persona activa ',
            'ca': 'soy una persona intuitiva',
            'ea': 'soy una persona lógica'
        },
        {
            'titulo': 'Yo aprendo mejor de...' ,
            'ec': 'la observacón',
            'or': 'la relacion con otras personas',
            'ca': 'las teorias racionales',
            'ea': 'la oportunidad de probar y practicar'
        },
        {
            'titulo': 'Cuando aprendo...' ,
            'ec': 'me gusta ver lso resultados de mi trabajo',
            'or': 'me gustan las ideas y las teorias',
            'ca': 'me tomo mi timepo antes de acutar',
            'ea': 'me siento personalmente involucrado en las cosas'
        },
        {
            'titulo': 'Aprendo mejor cuando...' ,
            'ec': 'confio en mis observciones',
            'or': 'confio en mis sentimientos',
            'ca': 'puedo probar por mi cuenta',
            'ea': 'confio en mis ideas'
        },
        {
            'titulo': 'cuando estoy aprendiendo...' ,
            'ec': 'soy una persona reservada',
            'or': 'soy una persona receptiva',
            'ca': 'soyuna persona responsable',
            'ea': 'soy una persona racional'
        },
        {
            'titulo': 'Cuanod aprendo...' ,
            'ec': 'me inolucro',
            'or': 'me gusta observar',
            'ca': 'evaluo las cosas',
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
