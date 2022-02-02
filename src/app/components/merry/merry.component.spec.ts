import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerryComponent } from './merry.component';

describe('MerryComponent', () => {
  let component: MerryComponent;
  let fixture: ComponentFixture<MerryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
