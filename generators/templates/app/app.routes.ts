import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {MessageComponent} from "./components/message/message.component";
import {ModuleWithProviders} from "@angular/core";
import {AddComponent} from "./components/add/add.component";
import {HeaderComponent} from "./components/header/header.component";
import {HeadingComponent} from "./components/heading/heading.component";
import {SummaryComponent} from "./components/summary/summary.component";
import {FooterComponent} from "./components/footer/footer.component";
import {RemoveComponent} from "./components/remove/remove.component";
import {BreadcrumbsComponent} from "./components/breadcrumbs/breadcrumbs.component";

export const appRoutes: Routes = [
  {
    path: 'breadcrumbs',
    component: BreadcrumbsComponent,
    outlet: 'breadcrumbs'
  },
  {
    path: 'header',
    component: HeaderComponent,
    outlet: 'header'
  },
  {
    path: 'message',
    component: MessageComponent,
    outlet: 'message'
  },
  {
    path: 'heading',
    component: HeadingComponent,
    outlet: 'heading'
  },
  {
    path: 'summary',
    component: SummaryComponent,
    outlet: 'summary'
  },
  {
    path: 'footer',
    component: FooterComponent,
    outlet: 'footer'
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'update',
    component: AddComponent
  },
  {
    path: 'remove',
    component: RemoveComponent
  }

  /*,

  { path: '**', component: HomeComponent }*/
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes/*, { enableTracing: true }*/);


