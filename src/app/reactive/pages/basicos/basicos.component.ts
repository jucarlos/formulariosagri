import { Component } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos-reactive',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  // miFormulario: FormGroup = new FormGroup({

  //   'nombre': new FormControl('Televisor'),
  //   'precio': new FormControl(1000),
  //   'existencias': new FormControl(1)

  // });


  miFormulario = this.fb.group({

    'nombre': [ '',
      [ Validators.required , Validators.minLength( 4 ) ] ],

    'precio': [ 0, [ Validators.required, Validators.min(0)], ],

    'existencias': [ 0, [ Validators.required, Validators.min(0)] ]


  });


  constructor(private readonly fb: FormBuilder) {}



  getMsgError( campo: string ): string {
    
    if ( !this.miFormulario.get(campo) ) return '';

    const errors = this.miFormulario.get(campo)?.errors || {};

    for( const key of Object.keys( errors )) {

      switch( key ) {

        case 'required':
            return 'Este campo es obligatorio';
        case 'minlength':
            return `Mínimo ${errors['minlength'].requiredLength } caracteres.`;
        case 'min':
            return `Mínimo ${errors['min'].min } .`
      }

    }

    return '';

  }




  campoNoEsValido( campo: string ): boolean | null | undefined {
    return this.miFormulario.get(campo)?.errors 
      && this.miFormulario.get(campo)?.touched;
  }




  guardar(): void  {


    console.log('Guardando....');

    if ( this.miFormulario.invalid ) {
      this.miFormulario.markAllAsTouched();
      return ;
    }

    // Formulario valido
    console.log( this.miFormulario.value );

    // reniciniar el formulario.
    this.miFormulario.reset({ precio: 999 })

  }





}
