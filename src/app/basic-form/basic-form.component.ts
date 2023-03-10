import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css'],
})
export class BasicFormComponent implements OnInit {
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
