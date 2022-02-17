import { DropdownBindingListAndFormComponent } from './dropdown-binding-list-and-form/dropdown-binding-list-and-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dropdown-binding', component: DropdownBindingListAndFormComponent },
  { path: '', redirectTo: 'dropdown-binding', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
