import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-material-form-controls';


  myForm = this.fb.group({
    name: ['', {
      validators: [
        Validators.required
      ],

    }],
    lastName: ['', {
      validators: [
        Validators.required
      ],

    }],
    birthday: ['', {
      validators: [
        Validators.required
      ],

    }],
    gender: ['', {
      validators: [
        Validators.required
      ],

    }],
    phone: ['', {
      validators: [
        Validators.required
      ],

    }],
    address: ['', {
      validators: [
        Validators.required
      ],

    }],
    profession: ['', {
      validators: [
        Validators.required
      ],

    }],
    incomes: ['', {
      validators: [
        Validators.required
      ],

    }],

  });



  constructor(private fb: FormBuilder) {

  }


  ngOnInit() {


  }

  get f() { return this.myForm.controls; }


  getMesaggeErrorName() {
    return this.f['name'].hasError('required') ? 'Fist name is required' : ''
  }

  getMesaggeErrorLastName() {
    return this.f['lastName'].hasError('required') ? 'Last name is required' : ''
  }

  getMesaggeErrorBirthday() {
    return this.f['birthday'].hasError('required') ? 'Birthday is required' : ''
  }
  getMesaggeErrorGender() {
    return this.f['gender'].hasError('required') ? 'Gender is required' : ''
  }
  getMesaggeErrorPhone() {
    return this.f['phone'].hasError('required') ? 'Phone is required' : ''
  }
  getMesaggeErrorAddress() {
    return this.f['address'].hasError('required') ? 'Address is required' : ''
  }
  getMesaggeErrorProfession() {
    return this.f['profession'].hasError('required') ? 'Profession is required' : ''
  }
  getMesaggeErrorIncomes() {
    return this.f['incomes'].hasError('required') ? 'Incomes is required' : ''
  }



  matcher = new MyErrorStateMatcher();


  onAddEmpTopic(empFormDirective: FormGroupDirective) {
    console.log(empFormDirective.submitted);
    console.log(this.myForm.status);
    if (!this.myForm.valid) {
      console.log('not valid!');
      return;
    }

    empFormDirective.resetForm();
    console.log('Submitted ' + empFormDirective.submitted);
  }



}


