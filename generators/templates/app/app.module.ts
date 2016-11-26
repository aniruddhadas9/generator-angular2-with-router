import {NgModule, CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {APP_BASE_HREF, CurrencyPipe} from '@angular/common';
import {RouterModule, Router}   from '@angular/router';
//import {Ng2PaginationModule} from 'ng2-pagination';

import {AppComponent}  from './app.component';
import {HomeComponent} from "./components/home/home.component";
import {AddComponent} from "./components/add/add.component";
import {HomeService} from "./components/home/home.service";


import {RestService} from "./services/rest.service";
import {MessageComponent} from "./components/message/message.component";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {BreadcrumbsComponent} from "./components/breadcrumbs/breadcrumbs.component";
import {routing, appRoutingProviders}  from './app.routes';
import {HeadingComponent} from "./components/heading/heading.component";
import {SummaryComponent} from "./components/summary/summary.component";
import {RemoveComponent} from "./components/remove/remove.component";

import {SearchPipe} from './pipes/search-pipe';
import {SummaryService} from "./components/summary/summary.service";
import {ReadMoreComponent} from "./components/utils/read.more.component";
import {LooseCurrencyPipe} from "./pipes/loose.currency.pipe";
import {Http, ConnectionBackend, RequestOptions, HttpModule} from "@angular/http";



import {ManageModule} from "./modules/manage.module";
//import {ManageComponent} from "./components/manage/manage.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ManageModule
    //Ng2PaginationModule
  ],
  declarations: [
    AppComponent,
    MessageComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    HeadingComponent,
    FooterComponent,
    HomeComponent,
    AddComponent,
    RemoveComponent,
    SummaryComponent,
    SearchPipe,
    ReadMoreComponent,
    LooseCurrencyPipe,
    //ManageComponent
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    CurrencyPipe,
    HomeService,
    SummaryService,
    RestService,
    appRoutingProviders
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule {

}
