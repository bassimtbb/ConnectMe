import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HPayComponent } from './h-pay.component';

describe('HPayComponent', () => {
  let component: HPayComponent;
  let fixture: ComponentFixture<HPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HPayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
