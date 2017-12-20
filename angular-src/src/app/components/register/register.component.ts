import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
  private validateService: ValidateService,
  private authService:AuthService,
  private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
    name: this.name,
    username: this.username,
    email: this.email,
    password: this.password
    }

    // Required fiels
    if(!this.validateService.validateRegister(user)){
        console.log('Please fill in all fields');
        return false;
    }

    // Validate email
    if(!this.validateService.validateEmail(user.email)){
        console.log('Please use a valid email');
        return false;
    }

    // Register User
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        console.log('You are now register and can log in');
        this.router.navigate(['/login']);
        this.authService.testA();
      } else {
        console.log('Something went wrong');
        this.router.navigate(['/register']);
      }
    });
  }

}
