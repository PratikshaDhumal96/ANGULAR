import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StructDirectiveComponent } from './struct-directive/struct-directive.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import{ReactiveFormsModule}from '@angular/forms';
import{UsersModule} from './users/users.module'

@NgModule({
  declarations: [
    AppComponent,
    StructDirectiveComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
