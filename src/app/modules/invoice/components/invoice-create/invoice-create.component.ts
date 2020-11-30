import { Component, OnInit } from '@angular/core';
import { InvoiceStoreService } from '../../../../store/invoice/invoice-store.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
  styleUrls: ['./invoice-create.component.scss']
})
export class InvoiceCreateComponent implements OnInit {

  public invoiceNameControl = new FormControl();

  constructor(private invoiceStore: InvoiceStoreService) { }

  ngOnInit(): void {
  }

  async createInvoice(): Promise<void> {
    const invoice = {
      name: this.invoiceNameControl.value,
      lastName: this.invoiceNameControl.value
    };

    await this.invoiceStore.createInvoice(invoice);
  }
}
