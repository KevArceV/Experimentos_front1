import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtRequest } from '../model/jwtRequest';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(request: JwtRequest) {
    return this.http.post("https://expconnection2connection-backend.onrender.com/authenticate", request);
  }


  verificar() {
    let token = sessionStorage.getItem("token");
    return token != null;

  }
  showRole() {
    let token = sessionStorage.getItem("token");
    const helper = new JwtHelperService();
    if (token) {
      const decodedToken = helper.decodeToken(token);
      return decodedToken?.role;
    } else {
      return null; // o un valor predeterminado si es necesario
    }
  }
}
