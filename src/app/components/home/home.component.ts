import { Component, OnInit } from '@angular/core';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private _serviceDepartamentos: ServiceDepartamentos) { }

  public departamentos!: Array<Departamento>

  ngOnInit() {
    this.loadDepartamentos()
  }

  deleteDepartamento(id: number) {
    this._serviceDepartamentos.deleteDepartamento(id).subscribe(response => {
      this.departamentos = response;
      this.loadDepartamentos();
    });
  }

  loadDepartamentos():void{
    this._serviceDepartamentos.getDepartamentos().subscribe(data => {
      this.departamentos = data;
    });
  }

}
