import {Component} from '@angular/core';
import {HomeService} from "../home/home.service";
import {appConstants} from "../../services/app.constants";

@Component({
  selector: 'message',
  templateUrl: 'app/components/message/message.component.html',
})
export class MessageComponent {

  constructor(public homeService: HomeService) {
  }

}
