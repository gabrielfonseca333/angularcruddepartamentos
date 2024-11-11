import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Departamento } from '../models/departamento';

@Injectable()
export class ServiceDepartamentos {
  constructor(private _http: HttpClient) { }

  getDepartamentos(): Observable<any>{
    let url = environment.urlApiDepartamentos + 'api/departamentos';
    return this._http.get(url);
  }

  insertDepartamentos(departamento: Departamento): Observable<any>{
    let json = JSON.stringify(departamento)
    let header = new HttpHeaders();
    header=header.set("Content-type", "application/json");
    let request = "api/departamentos"
    let url = environment.urlApiDepartamentos + request
    return this._http.post(url, json, {headers: header})
  }

}