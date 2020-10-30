import { Routes } from '@angular/router';
import { CreateEditionComponent, EditionDetailsComponent } from './edition';
import { EditionListComponent } from './edition/edition-list/edition-list.component';
import { CreateTastingComponent, TastingDetailsComponent, TastingsListComponent } from './tastings';
import { LoginComponent, UserDataComponent } from './users';

export const appRoutes:Routes= [
  { path: 'editions/new', component:CreateEditionComponent },
  { path: 'editions/id', component: EditionDetailsComponent },
  { path: 'editions', component: EditionListComponent },
  { path: 'tastings/new', component:CreateTastingComponent },
  { path: 'tastings', component:TastingsListComponent },
  { path: 'tastings/:id', component:TastingDetailsComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'login', component:LoginComponent },
  { path: 'user', component:UserDataComponent }

]
