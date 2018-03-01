import { Component, OnInit, Input } from '@angular/core';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { Item } from '../../../shared/models/item.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id: string;
  item: Item;
  titleForm: string; // dynamique title get by formComponent  with an @Input()
  constructor(private collectionService: CollectionService,
    private router: Router,
    private activateRoute: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.collectionService.getItem(this.id).subscribe((data) => {
      console.log(data);
      this.item = data;
    });
  }

  update(item: Item): void {

    this.collectionService.update(item);
  }



  process(item: Item): void {
    // this.modalService.createModal('Confirmation', 'Valider les modifications ?', ModalComponent).then((result) => {
      // console.log(result); // if click cancel btn
      // this.router.navigate(['/items']);
    // }, (reason) => {
      // console.log(reason); // return Confirm Click if click confirm btn, 0 if ESC key and 1 if click outside the modal
      // if (reason !== 0 && reason !== 1) {
        this.update(item);
      // }
    // });
  }

}
