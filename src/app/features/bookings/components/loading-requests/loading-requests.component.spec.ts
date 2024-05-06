import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingRequestsComponent } from './loading-requests.component';

describe('LoadingRequestsComponent', () => {
  let component: LoadingRequestsComponent;
  let fixture: ComponentFixture<LoadingRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingRequestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadingRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
