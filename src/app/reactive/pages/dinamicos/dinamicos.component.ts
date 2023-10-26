import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dinamicos-reactive',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {


  miFormulario = this.fb.group({

    
  });


  constructor( private readonly fb: FormBuilder ) {}



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

}
