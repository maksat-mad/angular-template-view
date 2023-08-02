import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OldComponent } from './old/old.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'old',
    component: OldComponent
  },
  {
    path: 'new',
    component: NewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
