import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';
import { User } from './log-in/user.model';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface AuthResponseData {
  id: number;
  username: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new Subject<User>();

  private baseUrl = 'http://localhost:8080/api/users/auth'; 

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string) {

    return this.http.post<AuthResponseData>(
      this.baseUrl,
      {
        username: username,
        password: password
      }
    ).pipe(tap(resData =>{

      if(resData !== null){
        const user = new User(
          resData.id, 
          resData.username, 
          resData.password, 
          resData.role
        );
        this.user.next(user);  
      } 
      })
    );
  }

  logout(){

    this.router.navigate(['/']);
  }

}
