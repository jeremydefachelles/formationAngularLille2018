import { Item } from '../shared/models/item.model';
import { State } from '../shared/enums/state.enum';

export const COLLECTION: Item[] = [
  {
    id: 'a1',
    name: 'Christophe Gueroult',
    reference: '1234',
    state: State.ALIVRER
  },
  {
    id: 'b1',
    name: 'Julien Trémot',
    reference: '1234',
    state: State.ENCOURS
  },
  {
    id: 'c1',
    name: 'Christophe Gueroult',
    reference: '1234',
    state: State.LIVREE
  }
];
