import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona {
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito {
  id: number;
  nombre: string;
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  nuevoFavorito: string = '';

  persona: Persona = {
    nombre: 'Juan Carlos',
    favoritos: [
      { id: 1, nombre: 'Java' },
      { id: 2, nombre: 'Sql' }
    ]
  }

  eliminarFavorito( index: number  ) {

    // this.persona.favoritos.filter( v => v.id != index );
    this.persona.favoritos.splice( index, 1 );
  }



  agregarFavorito() {
    console.log( this.nuevoFavorito );

    const favorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoFavorito,
    }

    this.persona.favoritos.push( favorito );

    this.nuevoFavorito = '';

  }
  

  guardar() {

    console.log('Guardando el formulario');

    console.log( this.miFormulario );

  }


}
