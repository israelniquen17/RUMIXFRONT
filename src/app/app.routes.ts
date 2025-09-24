import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio';
import { ProductosComponent } from './components/productos/productos';

export const routes: Routes = [
     { path: '', component: InicioComponent },
     { path: 'productos', component: ProductosComponent },
    { path: '**', redirectTo: '' }            
];

