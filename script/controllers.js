(function(){
    var gemstoreAppControllers = angular.module('gemstoreAppControllers', []);

    gemstoreAppControllers.controller('StoreController', function () {
        this.products = [
    {
        "name":"Diamond",
        "price":20000.95,
        "description":"Diamond diamond diamond",
        "images": [
            {//image object
                "full": "pictures/diamond1-full.jpg",
                "thumb": "pictures/diamond1-thumb.jpg"
            }, 
            {
                "full": "pictures/diamond2-full.jpg",
                "thumb": "pictures/diamond2-thumb.jpg"
            },
            {
                "full": "pictures/diamond3-full.jpg",
                "thumb": "pictures/diamond3-thumb.jpg"
            }
        ],
        "reviews":[
            {
                "stars":5,
                "body": "I love this ruby!",
                "author":"j@example.com"
            },
            {
                "stars":1,
                "body": "I do not like this ruby!",
                "author":"t@sample.com"
            }
        ]
    },
		{
		    "name":"Ruby",
		    "price":1000.95,
		    "description":"Ruby Ruby Ruby",
		    "images": [
		  		{
		  		    "full": "pictures/ruby1-full.jpg",
		  		    "thumb": "pictures/ruby1-thumb.jpg"
		  		}, 
	            {
	                "full": "pictures/ruby2-full.jpg",
	                "thumb": "pictures/ruby2-thumb.jpg"
	            }, 
	            {
	                "full": "pictures/ruby3-full.jpg",
	                "thumb": "pictures/ruby3-thumb.jpg"
	            } 	
		    ],
		    "reviews":[
	        	{
	        	    "stars":3,
	        	    "body": "I love this sapphire!",
	        	    "author":"j@example.com"
	        	},
	        	{
	        	    "stars":2,
	        	    "body": "I do not like this sapphire product!",
	        	    "author":"t@sample.com"
	        	}
		    ]
		}
        ];
    });
	/*app.controller('StoreController', ['$scope', '$http', function ($scope, $http) {
	    //Fetch data from API instead
	    var store = this;
	    store.products = [];
	    $http.get('json/products.json').success(function (data) {
	        $scope.store.products = data;

	    })
        .error(function (error) {
            console.log(error);
        })
	}]);*/
    
})();
