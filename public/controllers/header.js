todoApp.controller('Header', function($rootScope, $scope, $location, arandanoFactory, shareData){
    var sidebar = false;
    this.url = "/partials/sidebar.html";
    this.toogle = function(){

        $(".sidebar-collapse").toggle();
        if(sidebar === false) {
            $(".thelogo_sm").attr("src","assets/arandano2_.svg");
            sidebar = true;
        }
        else{
            $(".thelogo_sm").attr("src","assets/arandano2.svg");
            sidebar = false;
        }
    }; 
});
