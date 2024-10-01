import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousalsComponent } from './carousals.component';

describe('CarousalsComponent', () => {
  let component: CarousalsComponent;
  let fixture: ComponentFixture<CarousalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarousalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarousalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
