/// <reference path="added.variables.d.ts" />
System.register(["@angular/router", "@angular/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var router_1, core_1;
    var AppService;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppService = (function () {
                function AppService(router) {
                    this.router = router;
                    //this variable will connect your global variable to typescript
                    this._globalValue = window.globalValue;
                    this._displaySideBar = true;
                    this._message = 'initial message';
                    this._style = 'success';
                }
                AppService.prototype.moveToAnotherPage = function (value) {
                    this.router.navigate([value], { skipLocationChange: true });
                };
                Object.defineProperty(AppService.prototype, "globalValue", {
                    get: function () {
                        return this._globalValue;
                    },
                    set: function (value) {
                        this._globalValue = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppService.prototype, "displaySideBar", {
                    get: function () {
                        return this._displaySideBar;
                    },
                    set: function (value) {
                        this._displaySideBar = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppService.prototype, "message", {
                    get: function () {
                        return this._message;
                    },
                    set: function (value) {
                        this._message += value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppService.prototype, "style", {
                    get: function () {
                        return this._style;
                    },
                    set: function (value) {
                        this._style = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                AppService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppService);
                return AppService;
            }());
            exports_1("AppService", AppService);
        }
    }
});
//# sourceMappingURL=app.service.js.map