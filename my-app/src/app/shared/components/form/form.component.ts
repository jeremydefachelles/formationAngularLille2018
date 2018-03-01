import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Item } from '../../models/item.model';
import { State } from '../../enums/state.enum';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  libelles =  Object.values(State);
  closeResult: string;
  @Output() newItem: EventEmitter<Item> = new EventEmitter();
  @Input() item: Item;
  @Input() titleForm: string;

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal
  ) { } // injection

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {

    this.form = this.fb.group({
      name: [
        this.item ? this.item.name : '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ], // 1er formControl
      reference: [
        this.item ? this.item.reference : '',
        Validators.compose([Validators.required, Validators.minLength(4)])
      ], // 2e formControl
      state: this.item ? this.item.state : State.ALIVRER  // 3e formControl
    });
  }

  isError( champs: string): boolean {
    return false; // this.form.get(champs).invalid && this.form.get(champs).touched;
  }

  process() {
    const datas = this.getItem();
    this.newItem.emit(datas);
    this.form.reset();
    this.form.get('state').setValue(State.ALIVRER);
    // this.open();
  }

  getItem(): Item {
    const data = this.form.value as Item;
    if (!this.item) {
      return data; // add
    }
    const id = this.item.id;
    return {id, ...data}; // edit
  }

  openOld() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.msg = 'Votre commande a bien été ajoutée';
  }

  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.msg = 'Votre commande a bien été ajoutée';
    modalRef.result.then((result) => {
      // Click Annuler
      // this.closeResult = `Closed with: ${result}`;
      console.log(result);
    }, (reason) => {

      // Click OK
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log(reason);
      this.process();
    });


  }

  private getDismissReason(reason: any): string {
    // if (reason === ModalDismissReasons.ESC) {
    //   return 'by pressing ESC';
    // } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    //   return 'by clicking on a backdrop';
    // } else {
    //   return  `with: ${reason}`;
    // }
    return '';
  }





  // @Component({
  //   selector: 'ngbd-modal-component',
  //   templateUrl: './modal-component.html'
  // })

}

// template validator

// import { Component, OnInit } from '@angular/core';
// import { State } from '../../enums/state.enum';
// import { FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-form',
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.scss']
// })
// export class FormComponent implements OnInit {
//   state = State;

//   nom: string;
//   ref: string;
//   etat: string;

//   constructor() { }

//   ngOnInit() {
//     this.etat = State.ALIVRER;
//   }

//   process(form: FormGroup) {
//     console.log(form.value);
//   }

// }
