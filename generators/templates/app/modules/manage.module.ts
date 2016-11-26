import {NgModule, CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import {ManageComponent} from "./manage/components/manage/manage.component";

@NgModule({
  declarations: [
    ManageComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class ManageModule {

}
