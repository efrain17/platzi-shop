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
var CartComponent = (function () {
    function CartComponent(CartService) {
        this.CartService = CartService;
    }
    CartComponent.prototype.keys = function () {
        return Object.keys(this.courses);
    };
    CartComponent.prototype.ngOnInit = function () {
        this.courses = this.CartService.getCourses();
        this.details = this.CartService.getDetail();
    };
    return CartComponent;
}());
CartComponent = __decorate([
    core_1.Component({
        selector: 'cart',
        template: "\n    <div class=\"cart\">\n      <h2>Carrito</h2>\n      <span>{{details.items}} art\u00EDculos agregados</span>\n      \n      <div *ngFor=\"let key of keys()\" class=\"detail\">\n        {{courses[key].name}}\n        {{courses[key].price |\u00A0currency : 'USD' : true : '1.2-2'}}\n        x \n        {{courses[key].quantity}}\n        <span class=\"total\">\n          {{ ( courses[key].quantity *  courses[key].price)  |\u00A0currency : 'USD' : true : '1.2-2' }}\n        </span>\n\n      </div>\n\n      <span class=\"total\">{{details.total |\u00A0currency : 'USD' : true : '1.2-2'}}</span>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartComponent);
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map