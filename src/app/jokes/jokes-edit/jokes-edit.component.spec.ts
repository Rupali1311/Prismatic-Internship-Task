import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesEditComponent } from './jokes-edit.component';

describe('JokesEditComponent', () => {
  let component: JokesEditComponent;
  let fixture: ComponentFixture<JokesEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JokesEditComponent]
    });
    fixture = TestBed.createComponent(JokesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
