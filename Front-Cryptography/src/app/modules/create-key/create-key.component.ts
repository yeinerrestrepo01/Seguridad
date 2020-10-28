import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-key',
  templateUrl: './create-key.component.html',
  styleUrls: ['./create-key.component.scss'],
  providers: [FormBuilder]
})
export class CreateKeyComponent implements OnInit {
  public formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      inputkeymane: new FormControl("",Validators.required),
      inputtypekey: new FormControl("",Validators.required),
      inputkeyvalue: new FormControl("",Validators.required),
    });
  }
  onSubmitSave()
  {
    if (this.formGroup.valid) 
    {
      this.toastr.success('formulario OK', 'Mensaje de notificacion');
    } 
    else
    {
      this.toastr.warning('valide que todos los campos del formulario esten diligenciados', 'Mensaje de notificacion');
    }
  }
}
