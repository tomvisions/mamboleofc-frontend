import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private _apiLocation;

  constructor() {

    let options;
    if (process.env['node_dev'] === 'dev') {
      this._apiLocation = 'http://127.0.0.1'
//      options = {host: '127.0.0.1', dialect: 'mysql', port:3306}
    } else if ( process.env['NODE_ENV'] === 'stage') {
      this._apiLocation = 'https://api-stage.mamboleofc.ca/'
    } else {
      this._apiLocation = 'https://api.mamboleofc.ca/';
    }
  }

  get apiLocation() {
    return this._apiLocation;
  }
}
