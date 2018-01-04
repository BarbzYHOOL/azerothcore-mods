import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ModuleService } from '../module.service';
import { Module } from '../../models/Module';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {
    mod: Module;

    constructor(private route: ActivatedRoute,
              private modService: ModuleService,
              private location: Location) { }

    ngOnInit() {
        this.getDetail();
    }

    getDetail(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.mod = this.modService.getModule(id);
    }

    goBack(): void {
        this.location.back();
    }
}
