(function () {
    var gemstoreAppDirectives = angular.module('gemstoreAppDirectives', []);
    gemstoreAppDirectives.directive('productTitle', function () {//product-title: dash in HTML translates to camelCase in JavaScript
        return {
            //a configuration object defining how your directive will work
            restrict: 'E',
            templateUrl: 'partials/product-title.html'
        };
    });
    gemstoreAppDirectives.directive('productGallery', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/product-gallery.html',
            controller: function () {
                this.current = 0;
                this.setCurrent = function (newGallery) {
                    this.current = newGallery || 0;
                }
            },
            controllerAs: 'gallery'
        };
    });
    gemstoreAppDirectives.directive('productTab', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/product-tab.html',
            controller: function () {
                //app.controller('TabController',function(){
                this.tab = 1,//for ng-init="tab=1"
				this.selectTab = function (setTab) {//for ng-click tab=1
				    this.tab = setTab;
				},
				this.isSelected = function (checkTab) {//for active tab===1
				    return this.tab === checkTab;//for comparison--this will be either true or false
				}
                //});
            },
            controllerAs: 'tab'
        };
    });
    gemstoreAppDirectives.directive('productReview', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/product-review.html',
            controller: function () {
                this.review = {};
                this.addReview = function (product) {
                    product.reviews.push(this.review);//push review onto this product's review array
                    this.review = {};//{} a brand new javascript object which will clear out the review os the form will reset
                }
            },
            controllerAs: 'reviewCtrl'
        };
    });
})();
