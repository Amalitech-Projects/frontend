import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsButtonComponent } from './trips-button.component';

describe('TripsButtonComponent', () => {
  let component: TripsButtonComponent;
  let fixture: ComponentFixture<TripsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripsButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TripsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
