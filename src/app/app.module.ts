import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';

import {MeasurementDataService} from './measurement-data.service'

import { ChartsModule } from 'ng2-charts';
import { DatepickerModule } from 'ng2-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,    
    ChartsModule,
    DatepickerModule.forRoot()    
  ],
  providers: [MeasurementDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
