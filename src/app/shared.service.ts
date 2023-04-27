import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private _apiLocation;

  constructor() {
    if (environment.node_env === 'dev') {
      this._apiLocation = 'http://127.0.0.1:3000'
    } else if (environment.node_env === 'stage') {
      this._apiLocation = 'gv3y9o6cej.execute-api.us-east-1.amazonaws.com/stage'
///        this._apiLocation = 'https://d1a0rv3nusay5t.cloudfront.net'
//        this._apiLocation = 'https://api-stage.mamboleofc.ca'
    } else {
      this._apiLocation = 'https://api.mamboleofc.ca';
    }
  }

  get apiLocation() {
    return this._apiLocation;
  }
}
