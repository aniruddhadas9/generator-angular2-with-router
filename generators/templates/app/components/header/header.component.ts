import {Component} from '@angular/core';
import {AppService} from "../../services/app.service";
import {GlobalVariable} from "../../services/global-variable";

@Component({
  selector: 'component-header',
  templateUrl: GlobalVariable.staticPath+'app/views/header.component.html',
})
export class HeaderComponent {

  constructor(public appService: AppService) {
  }

}
