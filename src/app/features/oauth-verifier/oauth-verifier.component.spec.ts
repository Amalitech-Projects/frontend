import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OauthVerifierComponent } from './oauth-verifier.component';

describe('OauthVerifierComponent', () => {
  let component: OauthVerifierComponent;
  let fixture: ComponentFixture<OauthVerifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OauthVerifierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OauthVerifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
