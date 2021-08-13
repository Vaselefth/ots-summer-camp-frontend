import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface AuthResponseData {
  userId: bigint;
  username: string;
  password: string;
  role: string;
  isAuthenticated: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
}
