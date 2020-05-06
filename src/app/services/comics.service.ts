import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  private urlEndPoint:string = 'http://xkcd.com/';

  constructor(private http:HttpClient) { }

  getComit(numberComic:number):Observable<any>{
    return this.http.get(this.urlEndPoint+numberComic+'/info.0.json');
  }

}
