System.register(['@angular/core', '@angular/platform-browser', '@angular/common', './app.component', "./components/first/first.component", "./components/secound/second.component", "./components/third/third.component", "./services/app.service", '@angular/router', "./services/rest.service", "./components/side-menu/side-menu.component", "./components/message/message.component", "./components/header/header.component", "./components/footer/footer.component", "./components/breadcrumbs/breadcrumbs.component", "@angular/http", "@angular/forms"], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, common_1, app_component_1, first_component_1, second_component_1, third_component_1, app_service_1, router_1, rest_service_1, side_menu_component_1, message_component_1, header_component_1, footer_component_1, breadcrumbs_component_1, http_1, forms_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (first_component_1_1) {
                first_component_1 = first_component_1_1;
            },
            function (second_component_1_1) {
                second_component_1 = second_component_1_1;
            },
            function (third_component_1_1) {
                third_component_1 = third_component_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (rest_service_1_1) {
                rest_service_1 = rest_service_1_1;
            },
            function (side_menu_component_1_1) {
                side_menu_component_1 = side_menu_component_1_1;
            },
            function (message_component_1_1) {
                message_component_1 = message_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (breadcrumbs_component_1_1) {
                breadcrumbs_component_1 = breadcrumbs_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule,
                            http_1.HttpModule,
                            http_1.JsonpModule,
                            forms_1.FormsModule,
                            router_1.RouterModule.forRoot([
                                { path: '', component: first_component_1.FirstComponent },
                                { path: 'first', component: first_component_1.FirstComponent },
                                { path: 'secound', component: second_component_1.SecondComponent },
                                { path: 'third', component: third_component_1.ThirdComponent }
                            ])
                        ],
                        declarations: [
                            app_component_1.AppComponent,
                            message_component_1.MessageComponent,
                            side_menu_component_1.SideMenuComponent,
                            breadcrumbs_component_1.BreadcrumbsComponent,
                            header_component_1.HeaderComponent,
                            footer_component_1.FooterComponent,
                            first_component_1.FirstComponent,
                            second_component_1.SecondComponent,
                            third_component_1.ThirdComponent
                        ],
                        providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }, app_service_1.AppService, rest_service_1.RestService],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map