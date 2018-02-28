import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Item } from '../../models/item.model';
import { State } from '../../enums/state.enum';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  libelles =  Object.values(State);
  @Output() newItem: EventEmitter<Item> = new EventEmitter();
  constructor(private fb: FormBuilder) { } // injection
  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      name: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ], // 1er formControl
      reference: [
        '',
        Validators.compose([Validators.required, Validators.minLength(4)])
      ], // 2e formControl
      state: State.ALIVRER // 3e formControl
    });
  }

  isError( champs: string): boolean {
    return this.form.get(champs).invalid && this.form.get(champs).touched;
  }

  process() {
    this.newItem.emit(this.form.value);
  }

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
