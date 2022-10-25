import {FormControl, Validator, Validators} from "@angular/forms";
import {Employee} from "./employee";

export class EmployeeForm {
  firstName = new FormControl()
  lastName = new FormControl()

  constructor(employee: Employee) {
    this.firstName.setValue(employee.firstName);
    this.firstName.setValidators([Validators.required]);
    this.lastName.setValue(employee.lastName);
    this.lastName.setValidators([Validators.required]);
  }

}
