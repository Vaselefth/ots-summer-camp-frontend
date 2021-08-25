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

  myId: number;
  myUsername: string;
  myPassword: string;
  myRole: string = "unauthorized";

  constructor(private authService: AuthService){}

  onSubmit(form: NgForm){
    const username = form.value.username;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.authService.login(username, password).subscribe(response=>{
      if(response !== null){
        this.myId = response.id
        this.myUsername = response.username
        this.myPassword = response.password
        this.myRole = response.role
        console.log(response.role)
      }
    });

    console.log(form.value);

    console.log(this.myRole);

    form.reset();
  }
}
