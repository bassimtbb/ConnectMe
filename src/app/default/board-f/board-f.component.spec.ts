import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardFComponent } from './board-f.component';

describe('BoardFComponent', () => {
  let component: BoardFComponent;
  let fixture: ComponentFixture<BoardFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
