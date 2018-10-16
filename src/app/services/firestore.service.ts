import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  db: any;
  constructor(
    private _db: AngularFirestore
  ) {
    this.db = this._db.collection('orders');
   }

  save(data) {
    return this.db.add(data);
  }
}
