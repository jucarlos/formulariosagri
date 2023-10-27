import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor() { }


  validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
    
    // vamos a validar que el correo no sea correo@correo.com 
    const email = control.value;

    const emailObservable$ = new Observable<ValidationErrors | null>( ( subscriber ) => {

      if ( email === 'correo@correo.com' ) {
        subscriber.next({ emailUsado: true });
        subscriber.complete();
      }
      subscriber.next( null );
      subscriber.complete();

    } ).pipe(

      delay( 2000 )

    )    ;
   
    return emailObservable$;


  }



  // registerOnValidatorChange?(fn: () => void): void {
    
  //   throw new Error('Method not implemented.');
  // }



}
