var app = angular.module('specsApp', []);
//var app = angular.module('specsApp', ['ui.bootstrap']);

function collapse(level) {
    $('.collapse').collapse('show');
    $('.' + level + '-container').collapse('hide');
}

$('#collapse-level button').on('click', function(e) {
    var level = $(this).attr('collapse-level');
    console.log('clicked ' + level);
    $('.' + level + '-container').collapse('toggle');
});

app.controller('SpecsCtrl', ['$scope', function($scope) {
    $scope.update = function() {
        $scope.spec = jsyaml.load($scope.yaml);
        var contents = "data:text/csv;charset=utf-8," + $('.output').text() ;
        var encodeUri = encodeURI(contents);
        $("#download").attr("href", encodeUri);
    };
    //$scope.collapse = function(level) {
    //    console.log("collapsing " + level);
    //    collapse(level);
    //};
}]);
