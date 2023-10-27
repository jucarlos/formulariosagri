import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { DatosPais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-selectores',
  templateUrl: './selectores.component.html',
  styleUrls: ['./selectores.component.css']
})
export class SelectoresComponent implements OnInit {



  // Servicios
  private fb            = inject( FormBuilder );
  private paisesService = inject( PaisesService );

  // Propiedades de la clase
  miFormulario = this.fb.group({

    region: [ '' , Validators.required ],
    pais: [ '' , Validators.required ]

  });

  // Selectores
  regiones: string[] = [];
  paises: DatosPais[] = [];
  


  ngOnInit(): void {
    
    this.regiones = this.paisesService.regiones;
    
    // Pendiente de los cambios del combo regiones.
    this.miFormulario.get('region')?.valueChanges.subscribe( region => {

      console.log( region );
      this.paisesService.getPaisesPorRegion( region ).subscribe( paises => {

        console.log( paises );
        this.paises = paises;


      });

    });
    

    this.miFormulario.get('pais')?.valueChanges.subscribe( pais => {
      console.log('Cambiando de pais');
    });



  }




  guardar() {


    console.log('Guardando');


  }



}
