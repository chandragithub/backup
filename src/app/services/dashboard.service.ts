import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  data_url = 'assets/data/';
  constructor(private http: Http) { }

  public getDashboardList(): Observable<any> {
    return this.http.get(this.data_url + 'dashboard.json');
  }
}
