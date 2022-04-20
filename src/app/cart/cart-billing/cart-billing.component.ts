import { Component, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';

@Component({
  selector: 'app-cart-billing',
  templateUrl: './cart-billing.component.html',
  styleUrls: ['./cart-billing.component.sass'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class CartBillingComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private parent: FormGroupDirective) {}

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.form = this.parent.form;
    this.form.addControl(
      'billing',
      new FormGroup({
        'first-name': new FormControl(''),
        'last-name': new FormControl(''),
        'email': new FormControl(''),
        'phone':new FormControl(''),
        'address':new FormControl(''),
        'city':new FormControl(''),
        'country':new FormControl(''),
        'zip':new FormControl('')
      })
    );
  }
}
