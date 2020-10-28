import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoredkeysComponent } from './storedkeys/storedkeys.component';


const routes: Routes = [
  { path: '', component:StoredkeysComponent  },
  { path: 'home', component: StoredkeysComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
