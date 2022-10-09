import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{DaftComponent} from '../app/daft/daft.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'daft',
    component: DaftComponent,
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({

  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top'
  })],
})
export class AppRoutingModule { }
