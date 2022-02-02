import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BERHEProfileComponent } from './berhe-profile.component';

describe('BERHEProfileComponent', () => {
  let component: BERHEProfileComponent;
  let fixture: ComponentFixture<BERHEProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BERHEProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BERHEProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
