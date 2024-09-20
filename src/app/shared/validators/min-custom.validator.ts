import { Directive, forwardRef, Input } from '@angular/core';
import {
  NG_VALIDATORS,
  AbstractControl,
  ValidatorFn,
  Validator,
  FormControl,
} from '@angular/forms';

@Directive({
  selector: '[minCustom]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: MinCustomValidator, multi: true },
  ],
})
export class MinCustomValidator implements Validator {
  @Input('minCustom') minValue = 0;
  constructor() {}

  validate(c: FormControl) {
    console.log("this.minValue",this.minValue);
    
    let isValid = c.value > this.minValue;

    if (isValid) {
      return null;
    } else {
      return {
        minCustom: {
          valid: false,
        },
      };
    }
  }
}
