import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/core/auth.service';
import { callbackRequest } from '../../services/constants/types/data.types';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-oauth-verifier',
  standalone: true,
  imports: [],
  templateUrl: './oauth-verifier.component.html',
  styleUrl: './oauth-verifier.component.css'
})
export class OauthVerifierComponent implements OnInit{

  constructor( 
    private auth : AuthService, 
    private route : ActivatedRoute, 
    private router : Router
  ){}

  paramsData! : callbackRequest;

  ngOnInit(): void {  
  // get params for callback
    this.getParams();

    // Assuming getParams ensures paramsData.code and paramsData.registrationId are not null
  this.auth.googleCallBackRequest({
    code: this.paramsData.code,
    registrationId: this.paramsData.registrationId
  }).subscribe({
    next: (n:any) => {
      console.log(n);
      this.auth.saveUserAndToken(n.user, n.token);
    },
    error: (e) => {
      console.log(e);
    },
    complete: () => {
      this.router.navigate(['']);
    }
    });
  }

  getParams() {
    const code = this.route.snapshot.queryParamMap.get('code');
    const registrationId = this.route.snapshot.queryParamMap.get('registrationId');

    // Handling potential null values with a fallback or error handling:
    if (code === null || registrationId === null) {
        console.error("OAuth parameters missing in the URL.");
        this.paramsData = { code: '', registrationId: '' }; // Providing a fallback or consider error handling
        // Alternatively, handle this condition differently, e.g., show an error message or redirect.
    } else {
       this.paramsData = { code, registrationId };
    }
}


}