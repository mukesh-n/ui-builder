import { Directive, forwardRef, Input } from '@angular/core';
import {
  NG_VALIDATORS,
  AbstractControl,
  ValidatorFn,
  Validator,
  FormControl,
} from '@angular/forms';

@Directive({
  selector: '[patternCustom]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PatternCustomValidator,
      multi: true,
    },
  ],
})
export class PatternCustomValidator implements Validator {
  @Input('patternCustom') pattern = '';
  constructor() {}

  validate(c: FormControl) {
    let value = c.value;
    let pattern = new RegExp(this.pattern);
    let isValid = pattern.test(value);

    if (isValid) {
      return null;
    } else {
      return {
        patternCustom: {
          valid: false,
        },
      };
    }
  }
}
