import {Component} from '@angular/core';
import {AppService} from "../../services/app.service";
import {GlobalVariable} from "../../services/global-variable";

@Component({
  selector: 'side-menu',
  templateUrl: GlobalVariable.staticPath+'app/views/side-menu.html',
})
export class SideMenuComponent {

  constructor(public appService: AppService) {
  }

}
