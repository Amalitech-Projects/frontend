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

  constructor(private auth : AuthService, private route : ActivatedRoute, private router : Router){}

  paramsData! : callbackRequest;

ngOnInit(): void {  

  // get params for callback
  this.route.queryParams.subscribe(params => {
    this.paramsData.code = params['code'];
    this.paramsData.registrationId = params['registrationId'];
  })

    this.auth.googleCallBackRequest(this.paramsData).subscribe({
      next: (n) => {

      },
      complete: () => {
        this.router.navigate(['']);
      }
    })
}

}
