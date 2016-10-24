export class Locations {

  private _formatted_address: string;
  private _street_number: string;
  private _route: string;
  private _locality1: string;
  private _locality2: string;
  private _locality: string;
  private _postal_code: string;
  private _neighborhood: string;
  private _city: string;
  private _state: string;
  private _country: string;
  private _place_id: string;
  private _latitude: string;
  private _longitude: string;


  get formatted_address(): string {
    return this._formatted_address;
  }

  set formatted_address(value: string) {
    this._formatted_address = value;
  }

  get street_number(): string {
    return this._street_number;
  }

  set street_number(value: string) {
    this._street_number = value;
  }

  get route(): string {
    return this._route;
  }

  set route(value: string) {
    this._route = value;
  }

  get locality1(): string {
    return this._locality1;
  }

  set locality1(value: string) {
    this._locality1 = value;
  }

  get locality2(): string {
    return this._locality2;
  }

  set locality2(value: string) {
    this._locality2 = value;
  }

  get locality(): string {
    return this._locality;
  }

  set locality(value: string) {
    this._locality = value;
  }

  get postal_code(): string {
    return this._postal_code;
  }

  set postal_code(value: string) {
    this._postal_code = value;
  }

  get neighborhood(): string {
    return this._neighborhood;
  }

  set neighborhood(value: string) {
    this._neighborhood = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get place_id(): string {
    return this._place_id;
  }

  set place_id(value: string) {
    this._place_id = value;
  }

  get latitude(): string {
    return this._latitude;
  }

  set latitude(value: string) {
    this._latitude = value;
  }

  get longitude(): string {
    return this._longitude;
  }

  set longitude(value: string) {
    this._longitude = value;
  }
}
