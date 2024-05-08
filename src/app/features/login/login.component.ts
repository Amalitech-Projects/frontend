import { Component } from '@angular/core';
import { AuthService } from '../../services/core/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private auth : AuthService, private router : Router){}

  email! : string;
  password! : string;

  login(){
    this.auth.login({
      email: this.email,
      password: this.password
    }).subscribe({
      next: (n:any) => {
        this.router.navigate(['login']);
      }
    })
  }

}
