import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpinfoAddComponent } from './ipinfo-add.component';

describe('IpinfoAddComponent', () => {
  let component: IpinfoAddComponent;
  let fixture: ComponentFixture<IpinfoAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpinfoAddComponent]
    });
    fixture = TestBed.createComponent(IpinfoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
