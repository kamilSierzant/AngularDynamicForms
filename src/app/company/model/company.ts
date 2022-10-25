import {Employee} from "../employee/model/employee";

export class Company {
  name: string
  employees: Employee[]

  constructor(name: string, employees?: Employee[]) {
    this.name = name;
    this.employees = employees!;
  }
}
