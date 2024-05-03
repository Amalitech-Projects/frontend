import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderOneComponent } from './loader-one.component';

describe('LoaderOneComponent', () => {
  let component: LoaderOneComponent;
  let fixture: ComponentFixture<LoaderOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoaderOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
