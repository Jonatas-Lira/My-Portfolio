import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Projects } from './components/projects/projects';
import { EducationComponent } from './components/education/education';
import { CertificatesComponent } from './components/certificates/certificates';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'projects', component: Projects },

    { path: 'education', component: EducationComponent },
    { path: 'certificates', component: CertificatesComponent },
    { path: '**', redirectTo: 'home' }
];