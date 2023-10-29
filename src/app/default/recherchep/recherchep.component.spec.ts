import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchepComponent } from './recherchep.component';

describe('RecherchepComponent', () => {
  let component: RecherchepComponent;
  let fixture: ComponentFixture<RecherchepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecherchepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecherchepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
