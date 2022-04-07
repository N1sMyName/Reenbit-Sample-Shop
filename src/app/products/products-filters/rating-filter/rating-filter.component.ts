import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import {
  ControlContainer,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';

@Component({
  selector: 'app-rating-filter',
  templateUrl: './rating-filter.component.html',
  styleUrls: ['./rating-filter.component.sass'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class RatingFilterComponent implements OnInit {
  ratingMax = 5;
  loopArray = [];
  inputs: FormControl[] = [];
  private form: FormGroup;

  ratingGroup: FormGroup;
  @ViewChildren('checkBoxList') checkBoxList: QueryList<any>;

  constructor(private fb: FormBuilder, private parent: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.parent.form;
    this.form.addControl('rating', new FormArray([]));
    console.log(this.form.get('rating'));
  }
  
  createCheckboxRef() {
    this.inputs = this.checkBoxList
      .filter((e) => e.nativeElement.checked)
      .map(
        (e) =>
          new FormControl({
            id: e.nativeElement.id,
            state: e.nativeElement.checked,
          })
      );
      this.form.removeControl('rating')
      this.form.addControl('rating', new FormArray(this.inputs))
      
     
  }
  
}
