import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskhelpComponent } from './askhelp.component';

describe('AskhelpComponent', () => {
  let component: AskhelpComponent;
  let fixture: ComponentFixture<AskhelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskhelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AskhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
