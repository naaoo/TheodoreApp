import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CreateTastingComponent, TastingDetailsComponent } from './tastings/index';
import { LoginComponent, UserDataComponent } from './users/index';
import { NavbarComponent } from './nav/index';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { EditionDetailsComponent, CreateEditionComponent } from './edition/index';
import { EditionListComponent } from './edition/edition-list/edition-list.component';
import { EditionThumbnailComponent } from './edition/edition-thumbnail/edition-thumbnail.component';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreateTastingComponent,
    TastingDetailsComponent,
    NavbarComponent,
    LoginComponent,
    UserDataComponent,
    EditionDetailsComponent,
    CreateEditionComponent,
    EditionListComponent,
    EditionThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
