var What_Is_The_Meaning_Of_Life = 42

var app = angular.module('color_box', ['ngAnimate']);

app.run(function(){ console.clear(); });

app.controller('MainCtrl', function($scope) {
    
    $scope.colorEmpty = '';
    var colorNumber = 0;
    
    var colorRed = ['red']
    var colorBlue = ['blue']
    var colorYellow = ['yellow']
    var colorGreen = ['green']
    var colorCornsilk = ['cornsilk']


    $scope.color1 = function() {
        colorNumber ++;         
        if (colorNumber < colorRed.length)
        {
            $scope.colorEmpty = colorRed[colorNumber];            
        } else{
            colorNumber = 0;
            $scope.colorEmpty = colorRed[colorNumber];
        }
    }
    
    
    $scope.color2 = function() {
        colorNumber ++;         
        if (colorNumber < colorBlue.length)
        {
            $scope.colorEmpty = colorBlue[colorNumber];            
        } else{
            colorNumber = 0;
            $scope.colorEmpty = colorBlue[colorNumber];
        }
    }
    
    
    $scope.color3 = function() {
        colorNumber ++;         
        if (colorNumber < colorYellow.length)
        {
            $scope.colorEmpty = colorYellow[colorNumber];            
        } else{
            colorNumber = 0;
            $scope.colorEmpty = colorYellow[colorNumber];
        }
    }
    
    
     $scope.color4 = function() {
        colorNumber ++;         
        if (colorNumber < colorGreen.length)
        {
            $scope.colorEmpty = colorGreen[colorNumber];            
        } else{
            colorNumber = 0;
            $scope.colorEmpty = colorGreen[colorNumber];
        }
    }
    $scope.color5 = function() {
        colorNumber ++;         
        if (colorNumber < colorCornsilk.length)
        {
            $scope.colorEmpty = colorCornsilk[colorNumber];            
        } else{
            colorNumber = 0;
            $scope.colorEmpty = colorCornsilk[colorNumber];
        }
    }
})

document.addEventListener('DOMContentLoaded',function(event){
    
    console.log("Life is Meaningless")

});


