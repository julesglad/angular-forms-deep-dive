import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
  catForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.catForm = this.fb.group({
      catName: '',

    })
   }

  ngOnInit() {
  }

  buildCatForm() {
    this.catForm = this.fb.group({
      catName: '',

    })
  }
}