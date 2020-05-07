import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comic } from '../models/comic';


@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  private urlEndPoint:string = 'http://xkcd.com/';

  constructor(private http:HttpClient) { }

  //servicio el gual obtiene un comic determinado por medio del endPoint 
  getComit(numberComic:number):Observable<Comic>{
    return this.http.get<Comic>(this.urlEndPoint+numberComic+'/info.0.json');
  }

}
