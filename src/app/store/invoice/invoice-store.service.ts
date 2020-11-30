import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class InvoiceStoreService {

    public data: Observable<any[]>;

    constructor(private firestore: AngularFirestore) {
        this.data = firestore.collection('invoice').valueChanges();
    }

    createInvoice(invoice: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.firestore
                .collection('invoice')
                .add(invoice)
                .then(() => console.log('fulfilled'), _err => reject(_err));
        });
    }
}
