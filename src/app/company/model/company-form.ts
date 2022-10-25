import {Company} from "./company";
import {FormArray, FormControl} from "@angular/forms";
import {Employee} from "../employee/model/employee";

export class CompanyForm {
  name = new FormControl();
  employees: FormArray<any> = new FormArray<any>([]);

  constructor(company: Company) {
    if (company.name) {
      this.name.setValue(company.name)
    }

    if (company.employees) {
      this.employees.setValue([company.employees])
    }
  }
}
