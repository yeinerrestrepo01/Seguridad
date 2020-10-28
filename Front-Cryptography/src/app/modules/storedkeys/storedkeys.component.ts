import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-storedkeys',
  templateUrl: './storedkeys.component.html',
  styleUrls: ['./storedkeys.component.scss'],
  providers: [FormBuilder]
})
export class StoredkeysComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();

  displayedColumns: any[];
  columnsNames: any[];

  // K-key
  // S-Salt

  informacion : any [] =[
    {Typekey:"S",KeyName:"BancoPopularKey","Status":"Activo"},
    {Typekey:"S",KeyName:"BancoPopularKey","Status":"Inactivo"},
    {Typekey:"S",KeyName:"BancoPopularKey","Status":"Inactivo"},
    {Typekey:"S",KeyName:"BancoPopularKey","Status":"Inactivo"},
    {Typekey:"S",KeyName:"BancoPopularKey","Status":"Inactivo"},
    {Typekey:"K",KeyName:"BancoPopularKey","Status":"Inactivo"},
    {Typekey:"K",KeyName:"BancoPopularKey","Status":"Inactivo"},
    {Typekey:"K",KeyName:"BancoPopularKey","Status":"Inactivo"},
    {Typekey:"K",KeyName:"BancoPopularKey","Status":"Inactivo"},
    {Typekey:"K",KeyName:"BancoPopularKey","Status":"Inactivo"}
  ] ;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,private toastr: ToastrService) { }

  ngOnInit() {
    this.displayedColumns = [
      {name: "Typekey", label: "Tipo llave" },
      {name: "KeyName", label: "Nombre de llave" },
      {name: "Status", label: "Estado" }

    ];
    this.columnsNames = this.displayedColumns.map(x => x.name);
    this.columnsNames.push("Acciones");
    this.dataSource.data = this.informacion;
     setTimeout(() => { this.dataSource.paginator = this.paginator;});

     this.formGroup = this.formBuilder.group({
      Keysecret: new FormControl("",Validators.required),
      inputkeymane: new FormControl("",Validators.required),
      inputtypekey: new FormControl("",Validators.required),
      inputkeyvalue: new FormControl("",Validators.required),
    });
  }

  onSubmit()
  {
    if (this.formGroup.valid) 
    {
      this.toastr.success('formulario OK', 'Mensaje de notificacion');
    } 
    else
    {
      this.toastr.warning('debe ingresar el valor de la Llave secreta', 'Mensaje de notificacion');
    }
  }

}
