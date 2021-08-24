import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  constructor(private authService: AuthService){}

  onSubmit(form: NgForm){
    const username = form.value.username;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    authObs = this.authService.login(username, password);

    console.log(form.value);
    form.reset();
  }
}
