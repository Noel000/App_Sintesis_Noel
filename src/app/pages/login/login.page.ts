import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user: string = "";
  public pass: string = "";
  public loginError: boolean =false;

  constructor(private session: SessionService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.session.login(this.user, this.pass).subscribe(
      (response: any) => {
        let user: User = new User();
        user.name = response.body.name;
        user.username = response.body.user;
        user.email = response.body.email;
        user.token = response.headers.get('Authorization');

        this.session.user = user;
        this.loginError = false;
        this.router.navigate(['/home']);
      },
      (error: any) => {
        this.session.deleteUserSesion();
        this.loginError = true;
      }
    );
  }

}
