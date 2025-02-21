import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesTableComponent } from './jokes-table.component';

describe('JokesTableComponent', () => {
  let component: JokesTableComponent;
  let fixture: ComponentFixture<JokesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JokesTableComponent]
    });
    fixture = TestBed.createComponent(JokesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
