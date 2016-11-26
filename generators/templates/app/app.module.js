System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/common', './app.component', "./components/home/home.component", "./components/add/add.component", "./components/home/home.service", "./services/rest.service", "./components/message/message.component", "./components/header/header.component", "./components/footer/footer.component", "./components/breadcrumbs/breadcrumbs.component", './app.routes', "./components/heading/heading.component", "./components/summary/summary.component", "./components/remove/remove.component", './pipes/search-pipe', "./components/summary/summary.service", "./components/utils/read.more.component", "./pipes/loose.currency.pipe", "@angular/http", "./modules/manage.module"], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, forms_1, common_1, app_component_1, home_component_1, add_component_1, home_service_1, rest_service_1, message_component_1, header_component_1, footer_component_1, breadcrumbs_component_1, app_routes_1, heading_component_1, summary_component_1, remove_component_1, search_pipe_1, summary_service_1, read_more_component_1, loose_currency_pipe_1, http_1, manage_module_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (add_component_1_1) {
                add_component_1 = add_component_1_1;
            },
            function (home_service_1_1) {
                home_service_1 = home_service_1_1;
            },
            function (rest_service_1_1) {
                rest_service_1 = rest_service_1_1;
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
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (heading_component_1_1) {
                heading_component_1 = heading_component_1_1;
            },
            function (summary_component_1_1) {
                summary_component_1 = summary_component_1_1;
            },
            function (remove_component_1_1) {
                remove_component_1 = remove_component_1_1;
            },
            function (search_pipe_1_1) {
                search_pipe_1 = search_pipe_1_1;
            },
            function (summary_service_1_1) {
                summary_service_1 = summary_service_1_1;
            },
            function (read_more_component_1_1) {
                read_more_component_1 = read_more_component_1_1;
            },
            function (loose_currency_pipe_1_1) {
                loose_currency_pipe_1 = loose_currency_pipe_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (manage_module_1_1) {
                manage_module_1 = manage_module_1_1;
            }],
        execute: function() {
            //import {ManageComponent} from "./components/manage/manage.component";
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            http_1.HttpModule,
                            app_routes_1.routing,
                            manage_module_1.ManageModule
                        ],
                        declarations: [
                            app_component_1.AppComponent,
                            message_component_1.MessageComponent,
                            breadcrumbs_component_1.BreadcrumbsComponent,
                            header_component_1.HeaderComponent,
                            heading_component_1.HeadingComponent,
                            footer_component_1.FooterComponent,
                            home_component_1.HomeComponent,
                            add_component_1.AddComponent,
                            remove_component_1.RemoveComponent,
                            summary_component_1.SummaryComponent,
                            search_pipe_1.SearchPipe,
                            read_more_component_1.ReadMoreComponent,
                            loose_currency_pipe_1.LooseCurrencyPipe,
                        ],
                        providers: [
                            { provide: common_1.APP_BASE_HREF, useValue: '/' },
                            common_1.CurrencyPipe,
                            home_service_1.HomeService,
                            summary_service_1.SummaryService,
                            rest_service_1.RestService,
                            app_routes_1.appRoutingProviders
                        ],
                        bootstrap: [app_component_1.AppComponent],
                        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
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