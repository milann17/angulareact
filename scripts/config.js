requirejs.config({
     baseUrl: 'scripts',
     paths: {
         "angular": "../vendor/angular",
         "angularAMD": "../vendor/angularAMD",
         "angular-route" : "../vendor/angular-route",
         "app" : "app",
         "directiveTodos" : "directives/todos",
         "serviceData" : "services/data",
         "controllerMain" : "controllers/main",
         "controllerAbout" : "controllers/about"
     },
    shim: {
     "angularAMD" : ["angular",],
     "angular-route" : ["angular"],
     "app" : ["angular"],
     "directiveTodos" : ["angular"],
     "serviceData" : ["angular"],
     "controllerMain" : ["angular"],
     "controllerAbout" : ["angular"],

    },
    deps: ["app"]

});


// paths: {
//     "angular": "../vendor/angular",
//     "angularAMD": "../vendor/angularAMD",
//     "angular-route" : "../vendor/angular-route",
//     "app" : "app",
//     "directiveTodos" : "directives/todos",
//     "serviceData" : "services/data",
//     "controllerMain" : "controllers/main",
//     "controllerAbout" : "controllers/about"
// },
