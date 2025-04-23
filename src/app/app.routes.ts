import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { Component } from '@angular/core';

export const routes: Routes = [
  {path: '', component: ProductComponent},
  {path: '**', redirectTo: ''}
];