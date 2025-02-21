import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesAddComponent } from './jokes-add.component';

describe('JokesAddComponent', () => {
  let component: JokesAddComponent;
  let fixture: ComponentFixture<JokesAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JokesAddComponent]
    });
    fixture = TestBed.createComponent(JokesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
