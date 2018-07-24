import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  angular_url = 'assets/data/angular/';
  constructor(private http: Http) { }

  public getArticleList(): Observable<any> {
    return this.http.get(this.angular_url + 'angular_list.json');
  }

  public getArticleByTitle(url): Observable<any> {
    return this.http.get(this.angular_url + url + '.json');
  }
  
}
