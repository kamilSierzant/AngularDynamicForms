import {Component, OnDestroy, OnInit} from '@angular/core';
import {CompanyFormService} from "./company-form.service";
import {FormArray, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit, OnDestroy {

  companyForm: FormGroup
  companyFormSub: Subscription
  employees: FormArray
  formInvalid: boolean = false;

  constructor(private companyFormService: CompanyFormService) {
  }

  ngOnInit(): void {
    this.companyFormSub = this.companyFormService.companyForm$
      .subscribe(company => {
        this.companyForm = company!;
        this.employees = this.companyForm.get('employees') as FormArray;
      })
  }

  ngOnDestroy() {
    this.companyFormSub.unsubscribe()
  }

  addEmployee() {
    this.companyFormService.addEmployee();
  }

  deleteEmployee(index: number) {
    this.companyFormService.deleteEmployee(index);
  }

  saveCompany() {
    console.log('company saved!')
    console.log(this.companyForm.value)
  }

}
