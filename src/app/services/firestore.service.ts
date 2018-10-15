import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private _db: AngularFirestore
  ) { }

  save(data) {
    this._db.collection('orders').add(data);
  }
}
