import {Component, OnInit} from '@angular/core';
import {HomeService} from "../home/home.service";
import {Router} from "@angular/router";

@Component({
  selector: 'add',
  templateUrl: 'app/components/add/add.component.html',
})
export class AddComponent extends OnInit {

  private outlet: any = {
    breadcrumbs: 'breadcrumbs',
    header: 'header',
    message: 'message',
    heading: null,
    summary: 'summary',
    footer: 'footer'
  };

  constructor(private router: Router,
              public homeService: HomeService) {
    super();
  }

  ngOnInit(): void {
    this.router.navigate(['', {outlets: this.outlet}], {skipLocationChange: true});
  }

  //router.navigateByUrl('/home/(route1:page1//route2:page2//route3:page3)');
}
