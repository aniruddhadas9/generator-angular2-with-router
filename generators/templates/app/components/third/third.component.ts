import {Component, OnInit} from '@angular/core';
import {AppService} from "../../services/app.service";
import {GlobalVariable} from "../../services/global-variable";

@Component({
  selector: 'third',
  templateUrl: GlobalVariable.staticPath+'app/views/third.component.html',

})
export class ThirdComponent extends OnInit {

  constructor(public appService: AppService) {
    super();
  }

  ngOnInit() :void {
    this.appService.displaySideBar = false;
  }

  updateText($event: any) {
    console.log('$event: %o', $event);
    this.appService.message ='[Third]';
  }

}
