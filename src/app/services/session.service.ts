import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _user: User = new User();

  constructor(private http: HttpClient) { }

  set user(user: User) {
    let userData={
      'name': user.name,
      'username': user.username,
      'email': user.email,
      'token': user.token,
    }
    localStorage.setItem("USER_SESSION", JSON.stringify(userData));
  }

  get user(): User{
    let userString = localStorage.getItem("USER_SESSION");
    let user = new User();
    if(userString != null){
      let userObj = JSON.parse(userString);
      user.name = userObj.name;
      user.username = userObj.username;
      user.email = userObj.email;
      user.token = userObj.token;
    }
    return user;
  }

  deleteUserSesion(){
    localStorage.removeItem("USER_SESSION");
  }

  /*login(username: string, password: string){
    let loginUser = {
      user: username,
      pass: password,
    };

    let options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: 'response' as 'response'
    };

    //return this.http.post('http://localhost/daw/sintesis/', loginUser, options)
    //return this.http.post('http://localhost/daw/ci-demo/news', loginUser, options)
    return this.http.post('http://localhost/daw/ci-demo/api_segura/index', loginUser, options)
    
  }*/

  login(username: string, password: string){
    let loginUser = {
      user: username,
      pass: password,
    };

    let options = {
      headers: new HttpHeaders({
        // "Access-Control-Allow-Headers" : "Content-Type",
        // 'Access-Control-Allow-Methods:': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        // 'Access-Control-Allow-Headers:': 'Origin, Content-Type, X-Auth-Token',
        'Content-Type': 'application/json'
      }),
      observe: 'response' as 'response'
    };



    //return this.http.post('http://localhost/daw/sintesis/', loginUser, options)
    //return this.http.post('http://localhost/daw/ci-demo/news', loginUser, options)
    return this.http.post('http://localhost/daw/sintesis/api_segura/login', loginUser, options)
    
  }






 


}
