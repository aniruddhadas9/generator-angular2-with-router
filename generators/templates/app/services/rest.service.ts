import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable}     from 'rxjs/Observable';
import '../rxjs-operators';

@Injectable()
export class RestService {
  candifood_endpoint_url: String = "https://restcountries.eu/rest/v1/region/";
  countries_endpoint_url: String = "https://restcountries.eu/rest/v1/region/";
  private heroesUrl = 'app/heroes';  // URL to web API

  constructor(private http: Http) {
  }

  getCountriesByRegion(region: string) {
    return this.http.get(this.countries_endpoint_url + region).map(res => res.json());
  }

  getHeroes(): Observable<any[]> {
    return this.http.get(this.heroesUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: any) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
