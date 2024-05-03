import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  goToOrder() {
    this.ordered = true;
  }
  title = 'Modules';
  showProduct = false;
  ordered: boolean = false;
}
