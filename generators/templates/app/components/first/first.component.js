System.register(['@angular/core', "../../services/app.service", "../../services/rest.service", "../../services/global-variable"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, app_service_1, rest_service_1, global_variable_1;
    var FirstComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            },
            function (rest_service_1_1) {
                rest_service_1 = rest_service_1_1;
            },
            function (global_variable_1_1) {
                global_variable_1 = global_variable_1_1;
            }],
        execute: function() {
            FirstComponent = (function (_super) {
                __extends(FirstComponent, _super);
                function FirstComponent(appService, restService) {
                    _super.call(this);
                    this.appService = appService;
                    this.restService = restService;
                    this.region = 'asia';
                }
                FirstComponent.prototype.ngOnInit = function () {
                    this.appService.displaySideBar = true;
                };
                FirstComponent.prototype._callBackSummaryDetail = function (sender, params, response) {
                    this.serverData = response;
                    console.log('First|_callBackSummaryDetail|reached|this.serverData:%o', this.serverData);
                    console.log("RestService|_callBackEbRaise|params:%o, response:%o", params, response);
                };
                FirstComponent.prototype.summaryDetail = function () {
                    this.restService.getCountriesByRegion('asia');
                };
                ;
                FirstComponent.prototype.getCountriesByRegion = function () {
                    var _this = this;
                    this.error = "";
                    this.countries = [];
                    this.restService.getCountriesByRegion(this.region)
                        .subscribe(function (data) { return _this.countries = data; }, function (error) { return _this.error = "Region " + _this.region + " is invalid."; });
                };
                FirstComponent = __decorate([
                    core_1.Component({
                        selector: 'first',
                        templateUrl: global_variable_1.GlobalVariable.staticPath + 'app/views/first.component.html',
                    }), 
                    __metadata('design:paramtypes', [app_service_1.AppService, rest_service_1.RestService])
                ], FirstComponent);
                return FirstComponent;
            }(core_1.OnInit));
            exports_1("FirstComponent", FirstComponent);
        }
    }
});
//# sourceMappingURL=first.component.js.map