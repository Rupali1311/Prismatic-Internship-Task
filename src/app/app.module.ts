import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NewPipePipe } from './custom-pipes/new-pipe.pipe';
import { TemplateAdmissionFormComponent } from './template-admission-form/template-admission-form.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { CustomDateFormatPipe } from './custom-pipes/custom-date-format.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SenderComponent } from './sender/sender.component';
import { RecieverComponent } from './reciever/reciever.component';
import { CardChildComponent } from './card-child/card-child.component';
import { CardParentComponent } from './card-parent/card-parent.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { FormDataComponent } from './form-data/form-data.component';
import { UserDataComponent } from './user-data/user-data.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';
import { Observable1Component } from './observable1/observable1.component';
// import { AdmissionFormComponent } from './admission-form/admission-form.component';



@NgModule({
  declarations: [
    AppComponent,
    ForgetPasswordComponent,
    LoginComponent,
    SignupComponent,
    AdmissionFormComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    NewPipePipe,
    TemplateAdmissionFormComponent,
    ComponentAComponent,
    ComponentBComponent,
    CustomDateFormatPipe,
    ParentComponent,
    ChildComponent,
    SenderComponent,
    RecieverComponent,
    CardChildComponent,
    CardParentComponent,
    FormDataComponent,
    UserDataComponent,
    NewTaskComponent,
    ShowTaskComponent,
    Observable1Component
  ],

  imports: [
    BrowserModule,
    // UserAuthModule,
    FormsModule,
    ReactiveFormsModule,
    PipeDemoComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
