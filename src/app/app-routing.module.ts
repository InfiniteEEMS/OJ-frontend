import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProblemDetailComponent } from './problem-detail/problem-detail.component';
import { ProblemListComponent } from './problem-list/problem-list.component';


const routes: Routes = [
  { path: 'problems', component: ProblemListComponent },
  { path: 'problems/:id', component: ProblemDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
