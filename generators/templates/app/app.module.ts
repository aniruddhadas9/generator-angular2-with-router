import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {APP_BASE_HREF} from '@angular/common';

import {AppComponent}  from './app.component';
import {FirstComponent} from "./components/first/first.component";
import {SecondComponent} from "./components/secound/second.component";
import {ThirdComponent} from "./components/third/third.component";
import {AppService} from "./services/app.service";

import {RouterModule, Router}   from '@angular/router';
import {RestService} from "./services/rest.service";
import {SideMenuComponent} from "./components/side-menu/side-menu.component";
import {MessageComponent} from "./components/message/message.component";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {BreadcrumbsComponent} from "./components/breadcrumbs/breadcrumbs.component";
import {JsonpModule, HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    RouterModule.forRoot([
    {path: '', component: FirstComponent},
    {path: 'first', component: FirstComponent},
    {path: 'secound', component: SecondComponent},
    {path: 'third', component: ThirdComponent}
  ])
  ],
  declarations: [
    AppComponent,
    MessageComponent,
    SideMenuComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    FooterComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, AppService, RestService],
  bootstrap: [AppComponent]
})

export class AppModule {


}
