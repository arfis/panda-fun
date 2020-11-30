import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceCreateComponent } from './components/invoice-create/invoice-create.component';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [InvoiceCreateComponent, InvoiceListComponent],
  imports: [
    MatInputModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [InvoiceCreateComponent, InvoiceListComponent]
})
export class InvoiceModule { }
