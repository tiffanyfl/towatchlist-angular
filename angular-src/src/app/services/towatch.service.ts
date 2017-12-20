import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class TowatchService {

  authToken: any;
  user: any;
  filmtowatch: any;

  constructor(private http:Http) { }

  test(filmtowatch){
    console.log(filmtowatch);
  }
  addFilmToWatch(filmtowatch){
    let headers = new Headers();
    //headers.append('Authorization', this.authToken);
    headers.append('Content-type','application/json');
    return this.http.post('http://localhost:3000/towatches/towatch', filmtowatch,{headers:headers}).map(res => res.json());
  }

  testT(){
    console.log(this.addFilmToWatch(this.filmtowatch));
  }

  getList(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-type','application/json');
    return this.http.get('http://localhost:3000/towatches/getlist',{headers:headers}).map(res => res.json());
  }

  deleteFilmToWatch(filmtowatch){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-type','application/json');
    return this.http.delete('http://localhost:3000/towatches/deletefilm/'+filmtowatch._id, {headers:headers}).map(res => res.json());
  }

  modifyFilmToWatch(filmtowatch){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-type','application/json');
    return this.http.post('http://localhost:3000/towatches/modifyfilm/'+filmtowatch._id, {headers:headers}).map(res => res.json());
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

}
