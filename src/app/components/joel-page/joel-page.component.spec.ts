import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoelPageComponent } from './joel-page.component';

describe('JoelPageComponent', () => {
  let component: JoelPageComponent;
  let fixture: ComponentFixture<JoelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoelPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
