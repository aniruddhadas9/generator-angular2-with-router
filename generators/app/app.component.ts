import { Component } from '@angular/core';
import {AppService} from "./services/app.service";
import {GlobalVariable} from "./services/global-variable";

@Component({
  selector: 'app',
  templateUrl: GlobalVariable.staticPath+'app/views/app.component.html',
})
export class AppComponent {

  constructor(public appService: AppService) {
  }

}

