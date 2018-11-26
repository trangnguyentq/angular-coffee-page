'use strict';

// Declare app level module which depends on views, and components
var coffeeApp = angular.module('myApp', [
  'ngRoute',
  'ui.bootstrap',
  'smart-table'
]);


coffeeApp.config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
  .when('/coffees',
  {
    controller: 'SimpleController',
    templateUrl: 'coffees.html'
    
  })
  .when('/reviews/:coffeeId',
  {
    controller: 'SimpleController',
    templateUrl: 'reviews.html'
    
  })
  .otherwise({redirectTo: '/coffees'});
}
]);



coffeeApp.controller('SimpleController', ['$scope', '$routeParams', function($scope, $routeParams) {
  
    $scope.coffees =
         [
         {'id': 1,
         'brand': "Average Andy's Coffee",
         'name': 'Regular Coffee',
         'country': 'Denmark',
         'reviews': [
                 {'rating': 3,
                 'comment': "Could've been crispier",
                 'reviewer': "Chris P. Bacon"
                 }
         ]
         },
         {'id': 2,
         'brand': "Jimmy's Coffee",
         'name': 'Mocha',
         'country': 'America',
         'reviews': [
         {'rating': 10,
         'comment': 'What everyone should drink in the morning!',
         'reviewer': 'Earl Lee Riser'
         },
         {'rating': 10,
         'comment': 'A genius of everything coffee',
         'reviewer': 'Bob'
         }
         ]
         },
         {'id': 3,
         'brand': "We Did Our Best",
         'name': 'Latte',
         'country': 'France',
         'reviews': [
         {'rating': 1,
         'comment': " a 'latte' yuckiness.",
         'reviewer': 'Tim Burr'
         },
         {'rating': 1,
         'comment': 'Is this even coffee?',
         'reviewer': 'Sue Flay'
         },
          {'rating': 1,
         'comment': 'The grossest thing I have ever had.',
         'reviewer': 'Myles Long'
         },
          {'rating': 5,
         'comment': 'I dont know what the fuss is about, i dont think its too bad!',
         'reviewer': 'Sara Bellum'
         }
         ]
         },
         {'id': 4,
         'brand': "Jimmy's Special Coffee",
         'name': 'Americano',
         'country': 'America',
         'reviews': [
         {'rating': 10,
         'comment': 'If I could rate it higher, I would!',
         'reviewer': 'Justin Case'
         },
         {'rating': 10,
         'comment': 'He does it again!',
         'reviewer': 'Eileen Dover'
         }
         ]
         }];
         
         $scope.coffeeId = $routeParams.coffeeId;
         
      
}]);



coffeeApp.controller('CarouselDemoCtrl', ['$scope',  function($scope) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.slides =[
         {'image': 'http://cdn3.bigcommerce.com/s-d6ozndb/product_images/uploaded_images/coffee-timeflavorlr.jpg?t=1408686983', 'id':1},
         {'image': 'http://i.huffpost.com/gen/1693731/images/o-COFFEE-facebook.jpg', 'id':2},
         {'image': 'http://www.cafecoffeeday.com/thelounge/images/ccd-lounge-cold-side.jpg', 'id':3}];
      
      
      
      
}]);

