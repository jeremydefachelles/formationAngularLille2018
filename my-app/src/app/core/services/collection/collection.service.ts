import { Injectable } from '@angular/core';
import { Item } from '../../../shared/models/item.model';
// import { COLLECTION } from '../../collection';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CollectionService {
  collection$: Observable<Item[]>;
  itemsCollection: AngularFirestoreCollection<Item>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('collection');
    this.setCollection(this.itemsCollection.valueChanges());
  }

  /**
   * @description return collection
   */
  getCollection(): Observable<Item[]> {
    return this.collection$;
  }

  /**
   * @description set collection from BDD
   */
  setCollection(collection: Observable<Item[]>): void {
    this.collection$ = collection;
  }


}
