import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [

  {
    path: '',
    children: [
      { path: 'register', component: RegistroComponent },
      { path: '**', redirectTo: 'register'}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
