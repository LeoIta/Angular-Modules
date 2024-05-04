import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './notFound.component';
import { NotFoundRoutingModule } from './notFound-routing.module';

const routes: Routes = [
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [NotFoundComponent],
  imports: [NotFoundRoutingModule],
  exports: [NotFoundComponent, NotFoundRoutingModule],
})
export class NotFoundModule {}
