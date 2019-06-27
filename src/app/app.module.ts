import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { CovalentTabSelectModule } from '@covalent/core/tab-select';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule  } from '@covalent/core/steps';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule, FormsModule, MatButtonModule, MatCheckboxModule,
    CovalentLayoutModule, CovalentStepsModule, CovalentTabSelectModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
