var app = angular.module("app", ['ngRoute']); // 即使是空的，也要传个空数组，否则和报错。

(function() {
    var routeResolver = function() {

        this.$get = function() {
            return this;
        };

        this.routeConfig = function() {
            var viewsDirectory = '/app/views/',
                controllersDirectory = '/app/controllers/',

                setBaseDirectories = function(viewsDir, controllersDir) {
                    viewsDirectory = viewsDir;
                    controllersDirectory = controllersDir;
                },

                getViewsDirectory = function() {
                    return viewsDirectory;
                },

                getControllersDirectory = function() {
                    return controllersDirectory;
                };

            return {
                setBaseDirectories: setBaseDirectories,
                getControllersDirectory: getControllersDirectory,
                getViewsDirectory: getViewsDirectory
            };
        }();

        this.route = function(routeConfig) {
            var resolve = function(baseName, path, secure) {
                if (!path) path = '';

                var routeDef = {};
                routeDef.templateUrl = routeConfig.getViewsDirectory() + path + baseName + '.html';
                routeDef.controller = baseName + 'Controller';
                routeDef.secure = (secure) ? secure : false;
                routeDef.resolve = {
                    load: ['$q', '$rootScope', function($q, $rootScope) {
                        var dependencies = [routeConfig.getControllersDirectory() + path + baseName + 'Controller.js'];
                        return resolveDependencies($q, $rootScope, dependencies);
                    }]
                };

                return routeDef;
            };

            var resolveDependencies = function($q, $rootScope, dependencies) {
                var defer = $q.defer();
                // require(dependencies, function() {
                //     defer.resolve();
                //     $rootScope.$apply()
                // });
                setTimeout(function() {
                    // 模拟 require.js 
                    app.register.controller('CustomersController', ['$scope', 'config', 'dataService',
                        function($scope, config, dataService) {
                            //Controller code goes here    
                            console.log('controller code~');
                        }
                    ]);
                    defer.resolve();
                    $rootScope.$apply()
                }, 1000);

                return defer.promise;
            };

            return {
                resolve: resolve
            }
        }(this.routeConfig);

    };

    var servicesApp = angular.module('routeResolverServices', []);

    //Must be a provider since it will be injected into module.config()    
    servicesApp.provider('routeResolver', routeResolver);
})();

// 路由
app.config(
    function($routeProvider, routeResolverProvider, $controllerProvider,
        $compileProvider, $filterProvider, $provide) {

        //Change default views and controllers directory using the following:
        //routeResolverProvider.routeConfig.setBaseDirectories('/app/views', '/app/controllers');

        app.register = {
            controller: $controllerProvider.register,
            directive: $compileProvider.directive,
            filter: $filterProvider.register,
            factory: $provide.factory,
            service: $provide.service
        };

        //Define routes - controllers will be loaded dynamically
        var route = routeResolverProvider.route;

        $routeProvider
            .when('/customers', route.resolve('Customers'))
            .otherwise({
                redirectTo: '/customers'
            });

    });

app.controller("MainCtrl", ['$scope', function($scope) {
    $scope.names = ['joel', 'jack', 'jimmy', 'john'];
    $scope.getRandomName = function() {
        var index = Math.floor($scope.names.length * Math.random());
        $scope.name = $scope.names[index];
    }
    $scope.getRandomName();
}]);
