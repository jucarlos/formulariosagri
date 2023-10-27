import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/services/email-validator.service';
import { ValidatorService } from 'src/app/shared/services/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  // Servicios
  private fb                    = inject( FormBuilder );
  private validatorService      = inject ( ValidatorService );
  private emailValidatorService = inject( EmailValidatorService );


  // Creando el formulario

  public miFormulario: FormGroup = this.fb.group({

    nombre: [ 'Carlos', [ Validators.required, Validators.minLength(3) ]   ],

    identificador: [ '03869206P', [ 
      Validators.required,
      Validators.pattern( this.validatorService.expresion_regular_dni ),
      this.validatorService.validaDni
    ]  
      ],

    email: [
      'correo@gmail.com' , 
      [ Validators.required, Validators.pattern( this.validatorService.emailPattern) ] , 
      [ this.emailValidatorService  ]
    ],

    username: [ 'toledoUser', [ 
      Validators.required,
      this.validatorService.noPuedeSerCarlos
    
    ]    ],

    password1: [ '', [ Validators.required, Validators.minLength(6)]   ],

    password2: [ '', [ Validators.required, Validators.minLength(6 )]  ]


  } , {  validators: [ 
                    this.validatorService.camposIguales('password1', 'password2')
        ]  
      }
 );



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
