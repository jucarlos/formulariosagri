import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent {


  persona = {
    genero: 'F',
    notificaciones: true
  }

  terminosYCondiciones = false;


  guardar(formulario: NgForm ) {
    
    console.log( formulario );
  }

}
