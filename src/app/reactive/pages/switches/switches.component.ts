import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches-reactive',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent {


  miFormulario: FormGroup = this.fb.group({

    genero: ['M', Validators.required ],
    notificaciones: [ false, Validators.required ],
    condiciones: [ false, Validators.requiredTrue ]

  });

  persona = {
    genero: 'F',
    notificaciones: true,
  }



  constructor( private readonly fb: FormBuilder ) {}


  campoNoEsValido( campo: string ): boolean | null | undefined {
    return this.miFormulario.get(campo)?.errors 
      && this.miFormulario.get(campo)?.touched;
  }




  guardar() {

    if ( this.miFormulario.invalid ) {
      this.miFormulario.markAllAsTouched();
      return;
    }


    console.log('Guardando formulario');
    // console.log('Valor del formulario: ', this.miFormulario.value );
    // Enviar la persona al servidor.
    // Sacar los datos del formulario y pasarlos a la persona de una vez
    // desestructuración de objetos
    const { condiciones, ...resto } = this.miFormulario.value;


    this.persona = resto;



    console.log( 'Valor de la persona: ', this.persona );

  }

}
