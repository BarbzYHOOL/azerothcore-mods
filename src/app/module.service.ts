import { Injectable } from '@angular/core';
import { Module } from '../models/Module';
import { DBMODULES } from '../data/db-modules';

@Injectable()
export class ModuleService {

    constructor() { }

    getModules(): Module[] {
        return DBMODULES;
    }

    getModule(id): Module {
        return DBMODULES.find((e) => { return e.id === id });
    }
}
