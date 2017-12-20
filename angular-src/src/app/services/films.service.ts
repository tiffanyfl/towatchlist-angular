import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class FilmsService {

  authToken: any;
  user: any;
  dashfilm: any;

  constructor(private http:Http) { }

  addFilm(dashfilm){
    let headers = new Headers();
    //headers.append('Authorization', this.authToken);
    headers.append('Content-type','application/json');
    return this.http.post('http://localhost:3000/films/addfilm', dashfilm,{headers:headers}).map(res => res.json());
  }

  getFilm(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-type','application/json');
    return this.http.get('http://localhost:3000/films/getfilms',{headers:headers}).map(res => res.json());
  }

  getFilmByName(dashfilm){
    
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }



}
