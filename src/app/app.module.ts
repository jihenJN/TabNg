import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableFilterRowDemo } from 'src/app/demo/table-filter-row-demo';


// Import PrimeNG modules
import { AvatarModule } from 'primeng/avatar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';

import { TableModule } from 'primeng/table';

import { TagModule } from 'primeng/tag';

import { AnimateModule } from 'primeng/animate';


import { CustomerService } from 'src/service/customerservice';

@NgModule({
  imports: [
    AvatarModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TagModule,
    TableModule,
    MultiSelectModule,
    InputTextModule,
    DropdownModule,
    AnimateModule,
  
    RouterModule.forRoot([{ path: '', component: TableFilterRowDemo }])],
    declarations: [ TableFilterRowDemo ],
    bootstrap: [ TableFilterRowDemo ],
    providers: [ CustomerService ]
})

export class AppModule {}