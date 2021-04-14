import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: string = '';
  height: string = '';
  miles: string = '';

  onNameChanged(value: string) {
    this.name = value;
  }

  onDateChanged(value: string) {
    this.date = value;
  }

  onAmountChanged(value: string) {
    this.amount = value;
  }

  onHeightChanged(value: string) {
    this.height = value;
  }

  onMilesChanged(value: string) {
    this.miles = value;
  }
}
