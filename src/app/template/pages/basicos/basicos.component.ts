import { Component, ViewChild } from '@angular/core';
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


  guardar( ) {

    console.log('Guardando el formulario');

    if ( this.miFormulario.invalid ) {

      this.miFormulario.control.markAllAsTouched();
      return; 
    }



    console.log( this.miFormulario.value );

  }

}
