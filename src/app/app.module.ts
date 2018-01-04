import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ModulesListComponent } from './modules-list/modules-list.component';
import { ModuleComponent } from './module/module.component';
import { AppRoutingModule } from './/app-routing.module';

import { ModuleService } from './module.service';


@NgModule({
  declarations: [
    AppComponent,
    ModulesListComponent,
    ModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ModuleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
