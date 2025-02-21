import { Component } from '@angular/core';

@Component({
  selector: 'app-card-parent',
  templateUrl: './card-parent.component.html',
  styleUrls: ['./card-parent.component.scss']
})
export class CardParentComponent {
  cards = [
    { label: 'Total Invoices', value: '$2,342', color: '#007BFF' },
    { label: 'Paid Invoices', value: '$2,312', color: '#28A745' },
    { label: 'Unpaid Invoices', value: '$2,332', color: '#FFC107' },
    { label: 'Total Invoice Sent', value: '$3,587', color: '#6F42C1' }
  ];



  // handleCardClick(cardLabel: string) {
  //   alert(`Button clicked on: ${cardLabel}`);
  // }
}
