import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit{

  @ViewChild('cajaid') cajaId!: ElementRef;
  @ViewChild('cajanombre') cajaNombre!: ElementRef;
  @ViewChild('cajalocalidad') cajaLocalidad!: ElementRef;

  public departamento!: Departamento;

  constructor(private _activeRoute: ActivatedRoute, 
    private _service: ServiceDepartamentos,
  private _router: Router){}

  ngOnInit(): void {
    this._activeRoute.params.subscribe(params => {
      this._service.findDepartamento(params['id']).subscribe(res => {
        this.departamento = res;
      })
    })
  }

  updateDepartamento():void{

   let id = parseInt(this.cajaId.nativeElement.value);
   let nombre = this.cajaNombre.nativeElement.value;
   let localidad = this.cajaLocalidad.nativeElement.value;

   let newDepartamento = new Departamento(id, nombre, localidad);

   this._service.updateDepartamento(newDepartamento).subscribe(response=>{
     this._router.navigate(['/']);
   })



  }

}
