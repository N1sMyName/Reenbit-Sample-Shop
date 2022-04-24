import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  ControlContainer,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { CartValidationService } from '../cart-validation.service';

@Component({
  selector: 'app-cart-confirmation',
  templateUrl: './cart-confirmation.component.html',
  styleUrls: ['./cart-confirmation.component.sass'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
  encapsulation:ViewEncapsulation.None
})
export class CartConfirmationComponent implements OnInit {
  form: FormGroup;
  constructor(
    private parent: FormGroupDirective,
    private fb: FormBuilder,
    private cartValidator: CartValidationService
  ) {}

  ngOnInit(): void {
    this.form = this.parent.form;
    this.buildForm();
    // this.trackStatus();
    // console.log(this.form.controls['conditionTerms'].value.condition1);
  }
  buildForm() {
    this.form.addControl(
      'conditionTerms',
      this.fb.group({
        condition1: new FormControl(false),
        condition2: new FormControl(false),
      })
    );
  }
  // trackStatus() {
  //   this.form.statusChanges.pipe().subscribe((s) => console.log(s));
  // }
  addValidators() {
    this.cartValidator.formSub.next('');

    const child = this.form.get('conditionTerms') as FormGroup
    for(let i in child.controls) {
      child.controls[i].addValidators(Validators.requiredTrue)
      child.controls[i].updateValueAndValidity()
    }
    console.log(this.form.value)

  }
  get child () {
    return this.form.get('conditionTerms')
  }
}
