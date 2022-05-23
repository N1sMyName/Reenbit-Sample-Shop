import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function countryValidator(availableCountries: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isAbsent = availableCountries.filter(
      (c) => c.toLowerCase() === control.value.toLowerCase()
    );
    return !isAbsent.length ? { countryErr: control.value } : null;
  };
}

export function zipValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return !/\d/.test(control.value) ? { NaN: 'only numbers' } : null;
  };
}
export function stringValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return /\d/.test(control.value) ? { nonValidInput: 'only strings' } : null;
  };
}
