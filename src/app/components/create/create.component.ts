import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { Departamento } from '../../models/departamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  @ViewChild("cajaid") cajaId!: ElementRef
  @ViewChild("cajanombre") cajaNombre!: ElementRef
  @ViewChild("cajalocalidad") cajaLocalidad!: ElementRef

  constructor(
    private _service: ServiceDepartamentos,
    private _router: Router
  ){}

  crearDepartamento():void{
    let id = parseInt(this.cajaId.nativeElement.value);
    let nombre = this.cajaNombre.nativeElement.value;
    let localidad = this.cajaLocalidad.nativeElement.value;

    let newDepartamento = new Departamento(id, nombre, localidad);

    this._service.insertDepartamentos(newDepartamento).subscribe(response=>{
      this._router.navigate(['/']);
    })

  }

}
