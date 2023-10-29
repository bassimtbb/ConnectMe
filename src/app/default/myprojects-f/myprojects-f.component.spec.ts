import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprojectsFComponent } from './myprojects-f.component';

describe('MyprojectsFComponent', () => {
  let component: MyprojectsFComponent;
  let fixture: ComponentFixture<MyprojectsFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyprojectsFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyprojectsFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
