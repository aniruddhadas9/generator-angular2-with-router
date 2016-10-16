System.register(["@angular/core", "@angular/http", 'rxjs/Observable', '../rxjs-operators'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var RestService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            RestService = (function () {
                function RestService(http) {
                    this.http = http;
                    this.candifood_endpoint_url = "https://restcountries.eu/rest/v1/region/";
                    this.countries_endpoint_url = "https://restcountries.eu/rest/v1/region/";
                    this.heroesUrl = 'app/heroes'; // URL to web API
                }
                RestService.prototype.getCountriesByRegion = function (region) {
                    return this.http.get(this.countries_endpoint_url + region).map(function (res) { return res.json(); });
                };
                RestService.prototype.getHeroes = function () {
                    return this.http.get(this.heroesUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                RestService.prototype.extractData = function (res) {
                    var body = res.json();
                    return body.data || {};
                };
                RestService.prototype.handleError = function (error) {
                    // In a real world app, we might use a remote logging infrastructure
                    // We'd also dig deeper into the error to get a better message
                    var errMsg = (error.message) ? error.message :
                        error.status ? error.status + " - " + error.statusText : 'Server error';
                    console.error(errMsg); // log to console instead
                    return Observable_1.Observable.throw(errMsg);
                };
                RestService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RestService);
                return RestService;
            }());
            exports_1("RestService", RestService);
        }
    }
});
//# sourceMappingURL=rest.service.js.map