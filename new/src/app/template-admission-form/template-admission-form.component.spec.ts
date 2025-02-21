import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAdmissionFormComponent } from './template-admission-form.component';

describe('TemplateAdmissionFormComponent', () => {
  let component: TemplateAdmissionFormComponent;
  let fixture: ComponentFixture<TemplateAdmissionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateAdmissionFormComponent]
    });
    fixture = TestBed.createComponent(TemplateAdmissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
