import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {FilmsService} from '../../services/films.service';
import {TowatchService} from '../../services/towatch.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  itemCount: number;
  btnText: string = 'Add a film';
  btnadd: string = "Add to to-watch";

  filmname: string;

  goals = [];
  films: any;
  film = Object;
  //filmName = this.film.name
  name: string;
  director: string;
  year: string;
  img: string;
  description: string;

  constructor(
    private filmsService:FilmsService,
    private towatchService:TowatchService,
    private router:Router
  ) { }

  ngOnInit() {
    this.filmsService.getFilm().subscribe(film => {
      this.films= film;
    }, err => {
      console.log(err);
      return false;
    });
  }

  dashfilmSubmit(){
    const film = {
      name: this.name,
      director: this.director,
      year: this.year,
      description: this.description
    }
    console.log(film);

  //add to db
    this.filmsService.addFilm(film).subscribe(data => {
    if(data.success){
      console.log('Success !');
      //this.router.navigate(['/profile']);
    } else {
      console.log('Error !');
    }
  });
  this.films.push(film);
}


filmSubmit(name){
  const namefilm = name;
  const filmUser = {
    filmName: namefilm
  }

//add to db
  this.towatchService.addFilmToWatch(filmUser).subscribe(data => {
  if(data.success){
    console.log('Success !');
    this.router.navigate(['/towatch']);
  } else {
    console.log('Error !');
  }
  });
}

getFilmByName(name){

}

}
