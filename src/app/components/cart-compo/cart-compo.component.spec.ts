import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCompoComponent } from './cart-compo.component';

describe('CartCompoComponent', () => {
  let component: CartCompoComponent;
  let fixture: ComponentFixture<CartCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartCompoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
