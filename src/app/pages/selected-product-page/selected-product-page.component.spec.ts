import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedProductPageComponent } from './selected-product-page.component';

describe('SelectedProductPageComponent', () => {
  let component: SelectedProductPageComponent;
  let fixture: ComponentFixture<SelectedProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedProductPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
