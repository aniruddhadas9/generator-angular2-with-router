import {Component, OnInit} from '@angular/core';
import {SummaryService} from "./summary.service";
import {appConstants} from "../../services/app.constants";
import {RestService} from "../../services/rest.service";
import {HomeService} from "../home/home.service";

@Component({
  selector: 'summary',
  templateUrl: 'app/components/summary/summary.component.html'
})
export class SummaryComponent extends OnInit {

  constructor(//private restService: RestService,
              private homeService: HomeService,
              private summaryService: SummaryService) {
    super();
  }

  ngOnInit(): void {

    if (this.summaryService.summaryObject != null) {
      //console.log('The summary object is already available:%o', this.summaryService.summaryObject);
    } else {
      //this.summaryService.summaryObject = this.restService.getCountriesByRegion('ASIA');
    }

  }

}
