import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpComponent } from './forgetp.component';

describe('ForgetpComponent', () => {
  let component: ForgetpComponent;
  let fixture: ComponentFixture<ForgetpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
