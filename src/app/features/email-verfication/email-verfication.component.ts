import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/core/auth.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router'; // Import RouterModule for standalone components

@Component({
  selector: 'app-email-verfication',
  standalone: true,
  imports: [RouterModule], // Include RouterModule in imports
  templateUrl: './email-verfication.component.html',
  styleUrl: './email-verfication.component.css'
})
export class EmailVerficationComponent implements OnInit {
  constructor(
    private router : Router,
    private auth: AuthService,
    private route: ActivatedRoute // Inject ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.verifyEmail();
  }

  verifyEmail() {
    // Extract token and email from the URL
    const code = this.route.snapshot.queryParamMap.get('token');
    const email = this.route.snapshot.queryParamMap.get('email');

    console.log(code)
    
    if (code !== null && email !== null) {
      // Assuming the verifyEmail in AuthService expects an object with token and email
      this.auth.verifyEmail({ code, email }).subscribe({
        next: (response) => {
          console.log("Email verification successful", response);
          // Handle successful verification here (e.g., redirect or show a message)
        },
        error: (error) => {
          console.error("Email verification error", error);
          // Handle error here
        },
        complete: () =>{
          this.router.navigate(['']);
        }
      });
    }
  }
}
