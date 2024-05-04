import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThanksComponent } from './thanks.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: ThanksComponent }])],
  exports: [RouterModule],
})
export class ThanksRoutingModule {}
