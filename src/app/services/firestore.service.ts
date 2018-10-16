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
    this.db = _db.collection('orders');
   }

  save(data) {
    this.db.add(data).then(console.log);
  }
}
