"use strict";function Router(t,e){t.state("register",{url:"/register",templateUrl:"/templates/register.html",controller:"RegisterController as register"}).state("login",{url:"/login",templateUrl:"/templates/login.html",controller:"LoginController as login"}).state("test",{url:"/test",templateUrl:"/templates/test.html"}),e.otherwise("/users")}function Auth(t){t.loginUrl="/login",t.signupUrl="/register",t.tokenPrefix=""}function RegisterController(t,e){function r(){t.signup(o.user).then(function(){e.go("test")})}var o=this;o.user={},o.submit=r}function LoginController(t,e){function r(){t.login(o.credentials).then(function(){e.go("test")})}var o=this;o.credentials={},o.submit=r}function MainController(t,e,r){function o(){t.logout().then(function(){e.go("login")})}var n=this;n.isLoggedIn=t.isAuthenticated,n.logout=o}angular.module("boardApp",["ngResource","ui.router","satellizer"]).config(Router).config(Auth),Router.$inject=["$stateProvider","$urlRouterProvider"],Auth.$inject=["$authProvider"],angular.module("boardApp").controller("RegisterController",RegisterController).controller("LoginController",LoginController),RegisterController.$inject=["$auth","$state"],LoginController.$inject=["$auth","$state"],angular.module("boardApp").controller("MainController",MainController),MainController.$inject=["$auth","$state","$rootScope"];
//# sourceMappingURL=app.js.map
