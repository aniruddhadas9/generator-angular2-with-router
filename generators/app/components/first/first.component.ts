import {Component, OnInit} from '@angular/core';

import {AppService} from "../../services/app.service";
import {RestService} from "../../services/rest.service";
import {GlobalVariable} from "../../services/global-variable";

@Component({
  selector: 'first',
  templateUrl: GlobalVariable.staticPath+'app/views/first.component.html',

})
export class FirstComponent extends OnInit {

  private error: any;
  private region: string;
  private countries: any[];
  private serverData: any;

  constructor(private appService: AppService, private restService: RestService) {
    super();
    this.region= 'asia';
  }

  ngOnInit(): void {
    this.appService.displaySideBar=true;
  }

  private _callBackSummaryDetail(sender: any, params: any, response: any): void {
    this.serverData = response;
    console.log('First|_callBackSummaryDetail|reached|this.serverData:%o', this.serverData);
    console.log("RestService|_callBackEbRaise|params:%o, response:%o", params, response);

  }

  private summaryDetail(): void {
    this.restService.getCountriesByRegion('asia');
  };

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
