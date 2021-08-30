import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from '../auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  
  myLogo: string = "assets/logo/logo.jpg";

  constructor(private authService: AuthService,private router: Router){}

  onSubmit(form: NgForm){
    const username = form.value.username;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    authObs = this.authService.login(username, password);
    
    authObs.subscribe(response=>{
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
