import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpinfoEditComponent } from './ipinfo-edit.component';

describe('IpinfoEditComponent', () => {
  let component: IpinfoEditComponent;
  let fixture: ComponentFixture<IpinfoEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpinfoEditComponent]
    });
    fixture = TestBed.createComponent(IpinfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
