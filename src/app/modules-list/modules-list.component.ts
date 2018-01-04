import { Component, OnInit } from '@angular/core';
import { Module } from '../../models/Module';
import { ModuleService } from '../module.service';

@Component({
  selector: 'app-modules-list',
  templateUrl: './modules-list.component.html',
  styleUrls: ['./modules-list.component.css']
})
export class ModulesListComponent implements OnInit {
    mods: Module[];

    constructor(private modService: ModuleService) { }

    ngOnInit() {
        this.getModules();
    }

    getModules(): void {
        this.mods = this.modService.getModules();
    }
}
