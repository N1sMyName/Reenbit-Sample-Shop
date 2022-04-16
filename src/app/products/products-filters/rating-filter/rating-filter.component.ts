import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
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
  stars =[5,4,3,2,1]

  constructor(private fb: FormBuilder, private parent: FormGroupDirective) {}

  ngOnInit(): void {
    this.parent.form.addControl(
      'ratings',
      new FormGroup(
        this.stars.reduce(
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
