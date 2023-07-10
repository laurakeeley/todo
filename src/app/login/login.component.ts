import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = "laura"
  password = "ogpw"
  errorMessage = "Invalid Credentials"
  invalidLogin = false

  constructor(private router: Router) {

  }

  handleLogin() {
    // console.log(this.username);
    if (this.username === 'laura' && this.password === 'test123') {
      //redirect
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
