import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScanPage } from './scan.page';

import { ShareModule } from '../../modules/share/share.module';
import { SimplyPreventGuard } from '../../guards/simplyPrevent/simply-prevent.guard';

const routes: Routes = [
  {
    path: '',
    component: ScanPage,
    canActivate: [SimplyPreventGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ShareModule
  ],
  declarations: [ScanPage]
})
export class ScanPageModule { }
