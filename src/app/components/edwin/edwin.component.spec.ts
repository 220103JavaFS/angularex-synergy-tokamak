import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdwinComponent } from './edwin.component';

describe('EdwinComponent', () => {
  let component: EdwinComponent;
  let fixture: ComponentFixture<EdwinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdwinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
