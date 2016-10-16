/// <reference path="added.variables.d.ts" />

import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class AppService {

  //this variable will connect your global variable to typescript
  private _globalValue: any = window.globalValue;

  private _displaySideBar: boolean = true;
  private _message: string = 'initial message';
  private _style: string = 'success';

  constructor(private router: Router) { }

  moveToAnotherPage(value: string) {
    this.router.navigate([value], {skipLocationChange: true});
  }

  get globalValue(): any {
    return this._globalValue;
  }

  set globalValue(value: any) {
    this._globalValue = value;
  }

  get displaySideBar(): boolean {
    return this._displaySideBar;
  }

  set displaySideBar(value: boolean) {
    this._displaySideBar = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message += value;
  }

  get style(): string {
    return this._style;
  }

  set style(value: string) {
    this._style = value;
  }
}
