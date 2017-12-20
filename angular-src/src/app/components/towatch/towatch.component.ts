import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {TowatchService} from '../../services/towatch.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './towatch.component.html',
  styleUrls: ['./towatch.component.css'],

})
export class TowatchComponent implements OnInit {

  itemCount: number;
  btnText: string = 'Add an item';

  filmname: string;
  goals = [];
  filmarray = [];
  filmarraydelete = [];
  films: any;

  constructor(
    private towatchService:TowatchService,
    private router:Router
  ) { }

  ngOnInit() {
    this.itemCount = this.goals.length;
    this.towatchService.getList().subscribe(films => {
      this.films= films;
      //this.filmarray.push(films);
    }, err => {
      console.log(err);
      return false;
    });
    console.log(this.films);

    this.towatchService.getList().subscribe(films => {
      //this.filmarray= this.films;
      this.filmarray.push(films);
    }, err => {
      console.log(err);
      return false;
    });
    console.log(this.filmarray);
  }

  filmSubmit(){
    const filmUser = {
      filmName: this.filmname
    }
    console.log(filmUser);

  //add to db
    this.towatchService.addFilmToWatch(filmUser).subscribe(data => {
    if(data.success){
      console.log('Success !');
    //  this.router.navigate(['/dashboard']);
      this.towatchService.test(filmUser);
      this.towatchService.testT();
      this.films.push(filmUser);
    } else {
      console.log('Error !');
    }
  });
}

delete(film) {
      //this.filmarraydelete = this.films.splice(this.films.indexOf(film), 1);
      this.films.splice(this.films.indexOf(film), 1);
      console.log("films : ");
      console.log(this.films);
      console.log("film : ");
      console.log(film);
      console.log(film._id);

      //remove to db
        this.towatchService.deleteFilmToWatch(film).subscribe(data => {
        if(data.success){
          console.log('Success !');
          this.towatchService.test(film);
        } else {
          console.log('Error !');
        }
      });

  }

  watched(film){
    const filmwatched = {
      seen: true
    }

    console.log(film.seen = true);
    console.log(film);

    //remove to db
      this.towatchService.modifyFilmToWatch(film).subscribe(data => {
      if(data.success){
        console.log('Success !');
        this.towatchService.test(film);
      } else {
        console.log('Error !');
      }
    });
  }

/*addItem(){
this.goals.push(this.filmName);
//this.filmname = '';
this.itemCount = this.goals.length;
}

//remove to db
  this.towatchService.deleteFilmToWatch(this.films).subscribe(data => {
  if(data.success){
    console.log('Success !');
    console.log(film);
    //this.films.splice(this.films.indexOf(film), 1);
    this.router.navigate(['/towatch']);
  } else {
    console.log('Error !');
  }
});

removeItem(i) {
  this.goals.splice(i, 1);
}*/


}
