import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarySquareComponent } from './primary-square.component';

describe('PrimarySquareComponent', () => {
  let component: PrimarySquareComponent;
  let fixture: ComponentFixture<PrimarySquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimarySquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimarySquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
