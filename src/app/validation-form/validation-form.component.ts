import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.component.html',
  styleUrls: ['./validation-form.component.css']
})
export class ValidationFormComponent implements OnInit {
  catForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.catForm = this.fb.group({
      catName: '',
      furColor: '',
      weight: '',
      cutenessLevel: '',
    });
  }

  submitForm() {
    alert(this.catForm.value.catName + "'s form was submitted.")

  }
}