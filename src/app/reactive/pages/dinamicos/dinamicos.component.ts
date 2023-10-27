import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos-reactive',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  // Otra forma de injectar servicios que no sea en el constructor.
  private  fb = inject(FormBuilder);

  miFormulario = this.fb.group({
    nombre: [ 'Carlos', [Validators.required, Validators.minLength( 2 ) ] , ],
    
    favoritos: this.fb.array([
      ['Java', Validators.required ],
      ['Sql', Validators.required ],
    ], [ ] )
  
  });

  nuevoFavorito = this.fb.control('', Validators.required );


  get favoritoArr() {
    return this.miFormulario.controls['favoritos'] as FormArray;
  }


  eliminarFavorito( index: number ) {

   
    this.favoritoArr.removeAt( index );

    

  }



  agregarFavorito() {


    if ( this.nuevoFavorito.invalid ) return;

    const nuevo = this.nuevoFavorito.value;

    this.favoritoArr.push( this.fb.control( nuevo, Validators.required ));

    this.nuevoFavorito.reset();



  }



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


  esValidoenArray( formArray: FormArray, index: number ) {

    return formArray.controls[index]?.errors && formArray.controls[index].touched;
  }

}
