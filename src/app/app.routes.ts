import { Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'


export const routes: Routes = [
    {
        path: '',
        component: HeaderComponent,
    },
    {
        path: 'teste/componente',
        component: HeaderComponent,
    }
];
