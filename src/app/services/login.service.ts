import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient,
    private router: Router) {
  }
  api = "52.5.173.237/login.php"

  getLogin(email: any, password: any) {

    return this.http.post(this.api, { email: email, password: password })
  }
}