import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import {
  AbstractControl,
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

  constructor(private fb: FormBuilder, private parent: FormGroupDirective) {}

  ngOnInit(): void {
    this.parent.form.addControl(
      'ratings',
      new FormGroup(
        [1, 2, 3, 4, 5].reduce(
          (group: { [key: string]: AbstractControl }, rating: number) => {
            group[ rating] = new FormControl(false);
            return group;
          },
          {}
        )
      )
    );
  }
}
