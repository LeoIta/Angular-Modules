import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThanksComponent } from './thanks.component';

const routes: Routes = [{ path: 'thankyou', component: ThanksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThanksRoutingModule {}
