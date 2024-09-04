import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenCompoComponent } from './men-compo.component';

describe('MenCompoComponent', () => {
  let component: MenCompoComponent;
  let fixture: ComponentFixture<MenCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenCompoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
