requirejs.config({
     baseUrl: 'scripts/',
     paths: {
         "angular": "../vendor/angular",
         "angularAMD": "../vendor/angularAMD",
         "angular-route" : "../vendor/angular-route",

         // app
         "app" : "app.module",
         "appController": "app.controller",

         //componets
         "dashboardController": "components/dashboard/dashboard.controller",
         "aboutController": "components/about/about.controllers",
         "loginController": "components/login/login.controller",

         // directives
         "todoDirective" : "shared/todo/todo.directive",
         "todoController": "shared/todo/todo.controller",


         // services
         "taskService" : "shared/services/task.service",
         "userService" : "shared/services/user.service",

     },
    shim: {
     "angularAMD" : ["angular"],
     "angular-route" : ["angular"],
     "app" : ["angular"]
    },
    deps: ["app"]

});


// paths: {
//
// "angular": {
//    deps: ["jquery"],
//    export: "angular"
// },
//     "angularAMD": "../vendor/angularAMD",
//     "angular-route" : "../vendor/angular-route",
//     "app" : "app",
//     "directiveTodos" : "directives/todos",
//     "serviceData" : "services/data",
//     "controllerMain" : "controllers/main",
//     "controllerAbout" : "controllers/about"
// },
