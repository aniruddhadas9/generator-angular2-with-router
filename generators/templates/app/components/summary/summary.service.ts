import {Injectable} from "@angular/core";


@Injectable()
export class SummaryService {

  private _totalMonthlyCharge: number;
  private _totalOneTimeCharge: number;
  private _summaryObject: any;
  private _deviceCount: number;
  private _oneTimeDeviceCount: number;




  get totalOneTimeCharge(): number {
    this._totalOneTimeCharge = 0;
    //console.log('totalMonthlyCharge|this._summaryObject:%o', this._summaryObject);
    if (this._summaryObject != null) {
      this._summaryObject.basePlans.forEach((value:any)=> {
        this._totalOneTimeCharge += isNaN(+value.price) ? 0 : (+value.price);
      });
    }
    if (this._summaryObject != null) {
      this._summaryObject.additionalServices.forEach((value:any)=> {
        this._totalOneTimeCharge += isNaN(+value.price) ? 0 : (+value.price);
      });
    }

    if (this._summaryObject != null) {
      this._summaryObject.equipmentFees.forEach((value:any)=> {
        this._totalOneTimeCharge += isNaN(+value.price) ? 0 : (+value.price);
      });
    }
    //console.log('totalMonthlyCharge:%o', this._totalOneTimeCharge);
    return this._totalOneTimeCharge;
  }

  set totalOneTimeCharge(value: number) {
    this._totalOneTimeCharge = value;
  }


  get totalMonthlyCharge(): number {
    this._totalMonthlyCharge = 0;

    if (this._summaryObject != null) {
      this._summaryObject.basePlans.forEach((value:any)=> {
        this._totalMonthlyCharge += isNaN(+value.price) ? 0 : (+value.price);
      });
    }
    if (this._summaryObject != null) {
      this._summaryObject.additionalServices.forEach((value:any)=> {
        this._totalMonthlyCharge += isNaN(+value.price) ? 0 : (+value.price);
      });
    }

    if (this._summaryObject != null) {
      this._summaryObject.equipmentFees.forEach((value:any)=> {
        this._totalMonthlyCharge += isNaN(+value.price) ? 0 : (+value.price);
      });
    }
    if (this._summaryObject != null) {
      this._summaryObject.oneTimeCharges.forEach((value:any)=> {
        this._totalMonthlyCharge += isNaN(+value.price) ? 0 : (+value.price);
      });
    }
    //console.log('totalOneTimeCharge:%o', this._totalMonthlyCharge);
    return this._totalMonthlyCharge;
  }

  set totalMonthlyCharge(value: number) {
    this._totalMonthlyCharge = value;
  }


  get summaryObject(): any {
    return this._summaryObject;
  }

  set summaryObject(value: any) {
    this._summaryObject = value;
  }


  get deviceCount(): number {
    this._deviceCount = 0;
    if (this._summaryObject != null) {
      this._deviceCount += this._summaryObject.basePlans.length;
      this._deviceCount += this._summaryObject.additionalServices.length;
      this._deviceCount += this._summaryObject.equipmentFees.length;
    }
    return this._deviceCount;
  }

  set deviceCount(value: number) {
    this._deviceCount = value;
  }


  get oneTimeDeviceCount(): number {
    this._oneTimeDeviceCount = 0;
    if (this._summaryObject != null) {
      this._oneTimeDeviceCount += this._summaryObject.oneTimeCharges.length;
    }
    return this._oneTimeDeviceCount;
  }

  set oneTimeDeviceCount(value: number) {
    this._oneTimeDeviceCount = value;
  }
}
