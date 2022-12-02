import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Credenciais } from '../models/credenciais';
import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtService: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) { }

  authenticate(creds: Credenciais) {
    var k = `${API_CONFIG.baseURL}/login`;
    return this.http.post(k, creds, {
      observe: 'response',
      responseType: 'text'
    })
  }

  sucessfulLogin(token: string) {
    localStorage.setItem("token", token);
  }

  isAuthenticated() {
    let token = localStorage.getItem("token");
    if (token != null) {
      return !this.jwtService.isTokenExpired(token);
    }
    return false;
  }
}
