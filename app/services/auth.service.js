"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var USER = [
    {
        email: 'car@hotmail.com',
        password: '123'
    }
];
var AutService = (function () {
    function AutService(router) {
        this.router = router;
        this.users = USER;
        this.session = false;
    }
    AutService.prototype.redirect = function () {
        var link = ['/login'];
        this.session = false;
        this.router.navigate(link);
    };
    AutService.prototype.redirectWelcome = function () {
        var link = [''];
        this.router.navigate(link);
    };
    AutService.prototype.logout = function () {
        localStorage.removeItem("user");
        this.redirect();
    };
    AutService.prototype.login = function (user) {
        var user_exist = this.users.find(function (us) { return us.email == user.email; });
        if (user_exist && user_exist.password == user.password) {
            localStorage.setItem("user", JSON.stringify(user_exist));
            this.session = true;
            var link = ['/'];
            this.router.navigate(link);
        }
    };
    AutService.prototype.check = function () {
        if (!localStorage.getItem('user')) {
            this.session = false;
            this.redirect();
        }
        else
            this.session = true;
    };
    AutService.prototype.getSession = function () {
        return this.session;
    };
    AutService.prototype.user = function () {
        return localStorage.getItem("user");
    };
    return AutService;
}());
AutService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], AutService);
exports.AutService = AutService;
//# sourceMappingURL=auth.service.js.map