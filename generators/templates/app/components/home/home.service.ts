/// <reference path="../../services/global.variables.d.ts" />

import {Router, ActivatedRoute, Params} from "@angular/router";
import {Injectable} from "@angular/core";
import {IPaginationInstance} from "ng2-pagination";

import {Restaurant} from '../../beans/Restaurant';

@Injectable()
export class HomeService {

  private _message: string = 'initial message';
  private _restaurants: Restaurant[];

  public searchString: string = "";

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  public paginationConfig : IPaginationInstance = {
    id            : 'similarEquipmentPagination',
    itemsPerPage  : 3,
    currentPage   : 1,
    totalItems    : 5
  };

  moveToAnotherPage(value: string) {
    console.log('this.router:%o', this.router);
    this.router.navigate([value, { outlets: {message: 'message', sidemenu: 'sidemenu'}}], {skipLocationChange: true});
  }


  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message += value;
  }


  get restaurants(): Restaurant[] {
    return this._restaurants;
  }

  set restaurants(value: Array<Restaurant>) {
    this._restaurants = value;
  }
}
