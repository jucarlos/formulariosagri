import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { DinamicosComponent } from './pages/dinamicos/dinamicos.component';
import { SwitchesComponent } from './pages/switches/switches.component';

const routes: Routes = [

  {
    path: '',
    //component, se podría poner como una cabecera para este módulo
    children: [
      { path: 'basicos', component: BasicosComponent },
      { path: 'dinamicos', component: DinamicosComponent },
      { path: 'switches', component: SwitchesComponent },
      { path: '**', redirectTo: 'basicos' }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
