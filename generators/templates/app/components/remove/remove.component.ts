import {Component} from '@angular/core';
import {HomeService} from "../home/home.service";
import {appConstants} from "../../services/app.constants";

@Component({
  selector: 'second',
  templateUrl: 'app/components/remove/remove.component.html',
})
export class RemoveComponent {

  constructor(public homeService: HomeService) {
  }

  //router.navigateByUrl('/home/(route1:page1//route2:page2//route3:page3)');
}
