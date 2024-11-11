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
    this._serviceDepartamentos.getDepartamentos().subscribe(data => {
      this.departamentos = data;
    });
  }

}
