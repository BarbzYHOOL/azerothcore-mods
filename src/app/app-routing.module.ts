import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesListComponent } from './modules-list/modules-list.component';
import { ModuleComponent } from './module/module.component';

const routes: Routes = [
    { path: '', component: ModulesListComponent },
    { path: 'list', component: ModulesListComponent },
    { path: 'detail/:id', component: ModuleComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }