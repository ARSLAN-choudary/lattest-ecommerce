import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgnupCompoComponent } from './sgnup-compo.component';

describe('SgnupCompoComponent', () => {
  let component: SgnupCompoComponent;
  let fixture: ComponentFixture<SgnupCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SgnupCompoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SgnupCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
