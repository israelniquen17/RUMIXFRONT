import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio';
import { ProductosComponent } from './components/productos/productos';
import { SobrenosotrosComponent } from './components/sobrenosotros/sobrenosotros';

export const routes: Routes = [
     { path: '', component: InicioComponent },
     { path: 'productos', component: ProductosComponent },
    { path: 'sobrenosotros', component: SobrenosotrosComponent },
    { path: '**', redirectTo: '' }            
];

