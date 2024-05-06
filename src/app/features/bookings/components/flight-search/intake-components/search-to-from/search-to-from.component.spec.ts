import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchToFromComponent } from './search-to-from.component';

describe('SearchToFromComponent', () => {
  let component: SearchToFromComponent;
  let fixture: ComponentFixture<SearchToFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchToFromComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchToFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
