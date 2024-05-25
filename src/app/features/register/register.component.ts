import { Component } from '@angular/core';
import { AuthService } from '../../services/core/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private auth : AuthService, private router : Router){}

  email! : string;
  password! : string;
  username! : string;
  confirmPassword! : string;

  status! : string;

  loading : boolean = false;

  register(){
    if(this.password !== this.confirmPassword) {
      this.status = "Passwords do not match!";
      return; // Exit the method if the passwords do not match.
    }
    this.loading = true;
  
    this.auth.signUp({
      username: this.username,
      email: this.email,
      password: this.password
    }).subscribe({
      next: (n: any) => {
        this.status = "Registration successful. Redirecting...";
        // Optionally, wait a moment before redirecting
        setTimeout(() => this.router.navigate(['']), 1000);
      },
      error: (e: any) => {
        console.log(e);
        // Handle the error response to display an appropriate message
        if (e.status === 403 || e.error.message === "Email already in use!") {
          this.status = e.error.message;
          this.loading = false;
        } else {
          // Generic error message for other types of errors
          this.status = "An error occurred during registration.";
          this.loading = false;
        }
      },
      complete: () => {
        this.router.navigate(['']);
      }
    });
  }
  

  redirectUrl! : string;

  googleOAuthRedirect(){
    this.auth.googleOAuth().subscribe({
      next: (n:any) =>{
        this.redirectUrl = n.redirectUri;
        window.location.href = this.redirectUrl;
      }
    });
  }

}
