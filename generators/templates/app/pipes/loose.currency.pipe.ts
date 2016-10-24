import {Pipe, PipeTransform} from "@angular/core";
import {CurrencyPipe} from "@angular/common";
const _NUMBER_FORMAT_REGEXP = /^(\d+)?\.{0,1}((\d+)(-(\d+))?)?$/;

@Pipe({name: 'looseCurrency'})
export class LooseCurrencyPipe implements PipeTransform  {
  constructor (private _currencyPipe: CurrencyPipe) {}

  transform(value: any, currencyCode: string, symbolDisplay: boolean, digits: string): string {
    if (typeof value === 'number' || _NUMBER_FORMAT_REGEXP.test(value)) {
      return this._currencyPipe.transform(value, currencyCode, symbolDisplay, digits);
    } else {
      return value;
    }
  }
}
