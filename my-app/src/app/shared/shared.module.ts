import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  declarations: [NavComponent],
  exports: [
    NavComponent
  ]
})
export class SharedModule { }
