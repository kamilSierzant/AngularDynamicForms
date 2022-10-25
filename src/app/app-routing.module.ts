import {NgModule} from '@angular/core';
import {CompanyComponent} from "./company/company.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: CompanyComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
