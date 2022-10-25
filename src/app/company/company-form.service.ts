import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {CompanyForm} from "./model/company-form";
import {Company} from "./model/company";
import {EmployeeForm} from "./employee/model/employee-form";
import {Employee} from "./employee/model/employee";

@Injectable({
  providedIn: 'root'
})
export class CompanyFormService {

  private companyForm: BehaviorSubject<FormGroup | undefined> =
    new BehaviorSubject(this.fb.group(
      new CompanyForm(new Company(''))
    )) as BehaviorSubject<FormGroup | undefined>

  companyForm$: Observable<FormGroup | undefined> = this.companyForm.asObservable()

  constructor(private fb: FormBuilder) {
  }

  addEmployee() {
    const currentCompany = this.companyForm.getValue() as FormGroup
    const currentEmployees = currentCompany.get('employees') as FormArray

    currentEmployees.push(
      this.fb.group(
        new EmployeeForm(new Employee('', ''))
      )
    )
    this.companyForm.next(currentCompany);
  }

  deleteEmployee(index: number) {
    const currentCompany = this.companyForm.getValue()
    const currentEmployees = currentCompany?.get('employees') as FormArray

    currentEmployees.removeAt(index)
    this.companyForm.next(currentCompany);
  }
}
