import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";


import {HomeService} from "./components/home/home.service";

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {


  constructor(
    private router: Router,
    public homeService: HomeService
  ) {

  }

}
