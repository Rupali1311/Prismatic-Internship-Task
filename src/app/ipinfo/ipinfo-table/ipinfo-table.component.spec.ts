import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpinfoTableComponent } from './ipinfo-table.component';

describe('IpinfoTableComponent', () => {
  let component: IpinfoTableComponent;
  let fixture: ComponentFixture<IpinfoTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpinfoTableComponent]
    });
    fixture = TestBed.createComponent(IpinfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
