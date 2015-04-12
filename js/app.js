(function(){
	
  var ytApp = angular.module('ytApp', ['angularUtils.directives.dirPagination']);

	function VgController ($scope, $http){
			
  $scope.currentPage = 1;
  $scope.pageSize = 6;
  $scope.vList = [];

    



    $scope.fetchAll = function (pageToken){
      
      token = "https://www.googleapis.com/youtube/v3/search?part=snippet&pageToken="+ pageToken +"&channelId=UCxdJhHYJc0ySpGfZnDsoYvQ&maxResults=50&key=AIzaSyDJb9QqAwBPl8glvbx6hDr0slpCaYrsBdg";
      $http.get(token).success(function(data, status, headers, config) { 
        $scope.vList.push(data.items);
        
        if (data.nextPageToken != null) {
          $scope.fetchAll(data.nextPageToken);
        }

         $scope.videoList = [].concat.apply([],$scope.vList);
         console.log($scope.videoList);
      });
    }



  $scope.fetchAll("CAMQAQ");

  $scope.launch = function (id) {
    console.log(id);
      player.loadVideoById(id);
  }

  $scope.pageChangeHandler = function($event) {
    console.log('page changed to ' + num);
    
  };

}; 


function OtherController($scope) {
  $scope.pageChangeHandler = function($event) {
    console.log('going to page ');
  };


}


ytApp.controller('OtherController', OtherController);
ytApp.controller('VgController', VgController);


})();
	

