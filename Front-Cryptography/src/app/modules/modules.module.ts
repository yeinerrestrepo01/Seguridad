import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { StoredkeysComponent } from './storedkeys/storedkeys.component';
import { MatTableModule, MatPaginatorModule } from '@angular/material';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateKeyComponent } from './create-key/create-key.component';
@NgModule({
  declarations: [StoredkeysComponent, CreateKeyComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class ModulesModule { }
