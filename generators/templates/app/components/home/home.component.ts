import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {HomeService} from "./home.service";
import {RestService} from "../../services/rest.service";


@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.component.html'
})
export class HomeComponent extends OnInit {

  private error: any;
  private region: string;
  private countries: any[];
  private serverData: any;


  private outlet: any = {
    breadcrumbs: 'breadcrumbs',
    header: 'header',
    message: 'message',
    heading: 'heading',
    summary: 'summary',
    footer: 'footer'
  };

  constructor(private router: Router,
              private homeService: HomeService,
              private restService: RestService
  ) {
    super();
  }

  ngOnInit(): void {
    this.router.navigate(['', {outlets: this.outlet}], {skipLocationChange: true});
  }


  private getCountriesByRegion(){
    this.error = "";
    this.countries = [];
    this.restService.getCountriesByRegion(this.region)
      .subscribe(
        data => this.countries = data,
        error => this.error = "Region " + this.region + " is invalid."
      );
  }

}
