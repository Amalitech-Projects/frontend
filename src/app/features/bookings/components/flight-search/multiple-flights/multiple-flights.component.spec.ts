import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleFlightsComponent } from './multiple-flights.component';

describe('MultipleFlightsComponent', () => {
  let component: MultipleFlightsComponent;
  let fixture: ComponentFixture<MultipleFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleFlightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultipleFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
