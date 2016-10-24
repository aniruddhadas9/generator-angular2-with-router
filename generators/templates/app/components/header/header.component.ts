import {Component} from '@angular/core';
import {HomeService} from "../home/home.service";

@Component({
  selector: 'component-header',
  templateUrl: 'app/components/header/header.component.html',
})
export class HeaderComponent {

  constructor(public homeService: HomeService) {
  }

}
