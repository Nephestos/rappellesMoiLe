import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpCardComponent } from './pop-up-card.component';

describe('PopUpCardComponent', () => {
  let component: PopUpCardComponent;
  let fixture: ComponentFixture<PopUpCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopUpCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
