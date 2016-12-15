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
var common_1 = require("@angular/common");
var api_service_1 = require("../services/api.service");
var CourseDetail = (function () {
    function CourseDetail(route, location, ApiService) {
        this.route = route;
        this.location = location;
        this.ApiService = ApiService;
    }
    CourseDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.ApiService.getCourseId(id)
                .then(function (course) { return _this.course = course; });
        });
    };
    return CourseDetail;
}());
CourseDetail = __decorate([
    core_1.Component({
        template: "\n    <div class=\"detail-course\" *ngIf=\"course\" >\n      <img [src]=\"course.image\">\n      <h2>{{course.name}}</h2>\n      <span class=\"number\">\n        Costo de {{course.price |\u00A0currency : 'USD': true : '1.2-2'}}\n      </span> \n      <p>\n      {{course.description}} impartido por {{course.instructor}}\n      </p>\n    </div>\n  ",
        providers: [api_service_1.ApiService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        common_1.Location,
        api_service_1.ApiService])
], CourseDetail);
exports.CourseDetail = CourseDetail;
//# sourceMappingURL=details.components.js.map