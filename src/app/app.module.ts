import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ValidationFormComponent } from './validation-form/validation-form.component';

const routes = [
  {path: 'basicForm', component: BasicFormComponent},
  {path: 'validationForm', component: ValidationFormComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    ValidationFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
