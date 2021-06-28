import {BlogComponent} from './components/blog/blog.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
// @ts-ignore
const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
