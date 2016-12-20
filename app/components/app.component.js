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
var cart_service_1 = require("../services/cart.service");
var auth_service_1 = require("../services/auth.service");
var AppComponent = (function () {
    function AppComponent(autService) {
        this.autService = autService;
    }
    AppComponent.prototype.logout = function () {
        this.autService.logout();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.autService.check();
        console.log(this.autService.session);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <header>\n      Cursos Platzi  \n    </header>\n\n    <nav *ngIf=\"this.autService.session\">\n      <a routerLink=\"\">Inicio</a>\n      <a routerLink=\"courses\">Cursos</a>\n    </nav>\n\n    <div>\n      <a *ngIf=\"!autService.session\" routerLink=\"login\">Iniciar Sesion</a>\n      <a *ngIf=\"autService.session\" (click)=\"logout()\">Cerrar Sesion</a>\n    </div>\n\n    <section>\n      <router-outlet></router-outlet>\n    </section>\n  ",
        providers: [cart_service_1.CartService, auth_service_1.AutService]
    }),
    __metadata("design:paramtypes", [auth_service_1.AutService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map