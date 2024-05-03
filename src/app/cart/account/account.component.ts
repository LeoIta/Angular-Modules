import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  constructor(private orderService: OrderService, private router: Router) {}

  onSubmit(form: NgForm) {
    let personData = {
      name: form.value.name,
      email: form.value.email,
      cardNumber: form.value.card,
    };
    this.orderService.savePersonalData(personData);
    this.router.navigate(['order']);
  }
}
