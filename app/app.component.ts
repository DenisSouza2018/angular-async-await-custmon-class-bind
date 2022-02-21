import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  private apiURL = "https://api.github.com/";
  public relay = "Uninitialized";
  public response;

  teste = 'custmon1'

  constructor(private _http: HttpClient) {}

  async doSomething() {
    this.relay = "Waiting...";
    this.response = "";
    this.response = await this.longRunningMethod();
    this.relay = "called";
  }

  async longRunningMethod() {
    let response = await this._http.get<any>(this.apiURL).delay(1000).toPromise();
    return response;
  }
}
