import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThanksComponent } from './thanks.component';

@NgModule({
  declarations: [ThanksComponent],
  imports: [CommonModule, RouterModule],
  exports: [ThanksComponent],
})
export class ThanksModule {}
