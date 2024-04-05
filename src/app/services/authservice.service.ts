import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient) { }

  isAuthenticated: boolean = false;
  accessToken!: string;
  username!: string;
  roles: any;

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/auth/signin', { username, password });
  }

  loadProfile(data: any) {
    this.isAuthenticated = true;
    this.accessToken = data['accessToken'];
console.log("Access token : "+this.accessToken);
    if (typeof this.accessToken === 'string') {
      let decodeJwt: any = jwtDecode(this.accessToken);
      this.username = decodeJwt.sub;
      this.roles = decodeJwt.roles; // Utiliser authorities au lieu de roles
console.log(this.roles);
      return {
        isAuthenticated: this.isAuthenticated,
        accessToken: this.accessToken,
        username: this.username,
        roles: this.roles,
      };
    } else {
      console.error("Token JWT invalide");
      return null;
    }

      // Gérer le cas où le token JWT est invalide
    }
}


