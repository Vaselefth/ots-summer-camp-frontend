import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

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

  private baseUrl = 'http://localhost:8080/api/users/auth'; 

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {

    return this.http.post<AuthResponseData>(
      this.baseUrl,
      {
        username: username,
        password: password
      }
    );
  }

}
