import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  constructor(private authService: AuthService,private router: Router){}

  onSubmit(form: NgForm){
    const username = form.value.username;
    const password = form.value.password;

    this.authService.login(username, password).subscribe(response=>{
      if(response !== null){
        //console.log(response)
        this.router.navigate(['/menu']);
      }
      else{
        alert("Λανθασμένα στοιχεία χρήστη");
      }
    });

    form.reset();
  }
}
