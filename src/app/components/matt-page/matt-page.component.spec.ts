import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MattPageComponent } from './matt-page.component';

describe('MattPageComponent', () => {
  let component: MattPageComponent;
  let fixture: ComponentFixture<MattPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MattPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MattPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
