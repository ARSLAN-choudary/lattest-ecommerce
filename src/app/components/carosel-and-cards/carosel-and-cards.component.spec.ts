import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaroselAndCardsComponent } from './carosel-and-cards.component';

describe('CaroselAndCardsComponent', () => {
  let component: CaroselAndCardsComponent;
  let fixture: ComponentFixture<CaroselAndCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaroselAndCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaroselAndCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
