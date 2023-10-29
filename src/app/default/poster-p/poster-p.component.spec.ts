import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterPComponent } from './poster-p.component';

describe('PosterPComponent', () => {
  let component: PosterPComponent;
  let fixture: ComponentFixture<PosterPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosterPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosterPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
