import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsRequestComponent } from './flights-request.component';

describe('FlightsRequestComponent', () => {
  let component: FlightsRequestComponent;
  let fixture: ComponentFixture<FlightsRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightsRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightsRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
