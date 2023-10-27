import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/services/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  // Servicios
  private fb = inject( FormBuilder );
  private validatorService = inject ( ValidatorService );


  // Creando el formulario

  public miFormulario: FormGroup = this.fb.group({

    nombre: [ 'Carlos', [ Validators.required, Validators.minLength(3) ]   ],

    identificador: [ '03869206P', [ 
      Validators.required,
      Validators.pattern( this.validatorService.expresion_regular_dni ),
      this.validatorService.validaDni
    ]  
      ],

    email: [ 'carlos@correo.com' , [ Validators.required ]   ],

    username: [ '', [ 
      Validators.required,
      this.validatorService.noPuedeSerCarlos
    
    ]    ],

    password1: [ '123456', [Validators.required, Validators.minLength(6)]   ],

    password2: [ '123456', [ Validators.required, Validators.minLength(6 )]  ]


  });



  campoNoEsValido( campo: string ): boolean | null | undefined {

    return this.validatorService.campoNoEsValido( this.miFormulario, campo );
  }



  guardar() {

    console.log('Guardando...');
    if ( this.miFormulario.invalid ) {

      this.miFormulario.markAllAsTouched();

      return;
    }

  }



}
