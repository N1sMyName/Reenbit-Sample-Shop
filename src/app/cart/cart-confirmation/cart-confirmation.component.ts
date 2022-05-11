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
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { StoreService } from 'src/app/Services/store.service';
import { CartValidationService } from '../cart-validation.service';

@Component({
  selector: 'app-cart-confirmation',
  templateUrl: './cart-confirmation.component.html',
  styleUrls: ['./cart-confirmation.component.sass'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
  encapsulation: ViewEncapsulation.None,
})
export class CartConfirmationComponent implements OnInit {
  form: FormGroup;
  isReady = false;
  constructor(
    public parent: FormGroupDirective,
    private fb: FormBuilder,
    private cartValidator: CartValidationService,
    private router: Router,
    public store:StoreService,
    public auth:AuthService
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

    const child = this.form.get('conditionTerms') as FormGroup;
    for (let i in child.controls) {
      child.controls[i].addValidators(Validators.requiredTrue);
      child.controls[i].updateValueAndValidity();
    }
    this.parent.form.updateValueAndValidity()
    this.checkValidity
      
  }
  checkValidity(){
    if (this.parent.form.valid && this.parent.form.dirty) {
      this.isReady = true
      this.store.updateHistory(this.auth.user,[])
    }
  }

  get child() {
    return this.form.get('conditionTerms');
  }
  backHome() {
    localStorage.clear();
    this.router.navigate(['/products']);
    setTimeout(()=>{this.isReady = false;},1000)
    
  }
}
