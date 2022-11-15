import { Injectable } from '@angular/core';
import dotenv from "dotenv";
dotenv.config();

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private _apiLocation;

  constructor() {

    let options;
    if (process.env['LOCAL']) {
      this._apiLocation = 'http://127.0.0.1'
//      options = {host: '127.0.0.1', dialect: 'mysql', port:3306}
    } else if ( process.env['NODE_ENV'] === 'staging') {
      this._apiLocation = 'https://api-stage.mamboleofc.ca/'
    } else {
      this._apiLocation = 'https://api.mamboleofc.ca/';
    }
  }

  get apiLocation() {
    return this._apiLocation;
  }
}
