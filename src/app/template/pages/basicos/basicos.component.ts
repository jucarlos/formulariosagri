import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {


  @ViewChild('miFormulario') miFormulario!: NgForm;

  


  nombreNoValido(): boolean {

    return this.miFormulario?.controls['producto']?.invalid 
      && this.miFormulario?.controls['producto']?.touched;

  }

  precioNoValido(): boolean {
    return this.miFormulario?.controls['precio']?.value < 0
    && this.miFormulario?.controls['precio']?.touched;
  }


  guardar( formu: NgForm) {

    console.log('Guardando el formulario');

    if ( formu.invalid ) {

      formu.control.markAllAsTouched();
      return; 
    }



    console.log( formu.value );

  }

}
