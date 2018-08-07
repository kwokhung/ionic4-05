import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChartPage } from './chart.page';

import { ShareModule } from '../../modules/share/share.module';

const routes: Routes = [
  {
    path: '',
    component: ChartPage
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
  declarations: [ChartPage]
})
export class ChartPageModule {}
