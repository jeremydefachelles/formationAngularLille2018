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

  add(item: Item): void {
    // Persist a document id
    item.id = this.afs.createId();
    this.itemsCollection.doc(item.id).set(item).catch(error => console.log(error));
  }

  delete(item: Item): void {
    // Persist a document id
    this.itemsCollection.doc(item.id).delete().catch(error => console.log(error));

  }

  update(item: Item): void {
    console.log(item.id);
    this.itemsCollection.doc(item.id).update(item).catch(error => console.log(error));
  }

  getItem(id: String): Observable<Item> {
    // Persist a document id
    const item = this.afs.doc<Item>(`collection/${id}`).valueChanges();
    return item;
  }

}
