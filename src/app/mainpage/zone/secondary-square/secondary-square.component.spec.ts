import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondarySquareComponent } from './secondary-square.component';

describe('SecondarySquareComponent', () => {
  let component: SecondarySquareComponent;
  let fixture: ComponentFixture<SecondarySquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondarySquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondarySquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
