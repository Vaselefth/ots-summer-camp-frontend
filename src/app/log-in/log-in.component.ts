import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

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
    console.log(form.value);
    form.reset();
  }
}
