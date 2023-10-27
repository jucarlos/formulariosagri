import { Injectable } from '@angular/core';
import { DatosPais, Pais, Region } from '../interfaces/pais.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private baseUrl = 'https://restcountries.com/v3.1';


  private _regiones: Region[] = 
  [ Region.Africa, Region.Americas, Region.Antarctic, Region.Asia, Region.Europe, Region.Oceania];

  //private _regiones = ['Africa', 'Europa', 'America'];


  constructor(private http: HttpClient) { }

  get regiones() {
    return [...this._regiones ];
  }



  getPaisesPorRegion( region: string | null): Observable<DatosPais[]>{


    if ( !region ) return of([]);

    const url = `${this.baseUrl}/region/${region}?fields=name,cca3,borders`;

    return this.http.get<Pais[]>(url)
    .pipe(
      map( paises => paises.map( pais => ({
        name: pais.name.common,
        cca3: pais.cca3,
        borders: pais.borders ?? []
      })))

    );

    


  }



}
