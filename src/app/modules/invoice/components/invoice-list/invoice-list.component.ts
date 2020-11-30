import { Component, OnInit } from '@angular/core';
import { InvoiceStoreService } from '../../../../store/invoice/invoice-store.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  invoices$: Observable<any>;

  constructor(private invoiceStore: InvoiceStoreService){
    this.invoices$ = this.invoiceStore.data.pipe(tap(data => console.log(data)));
  }

  ngOnInit(): void {
  }

}
