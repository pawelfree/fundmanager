import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./material.module";
import { DividePipe } from "./pipe/divide/divide.pipe";
import { InstrumentTableComponent } from "./instrument-table/instrument-table.component";
import { InstrumentChangeItemComponent } from "./instrument-table/instrument-change-item/instrument-change-item.component";
import { SpinnerOverlayComponent } from "./spinner/spinner-overlay.component";
import {InstrumentDetailsComponent} from "./instrument-table/instrument-details/instrument-details.component";

@NgModule({
  declarations: [
    AppComponent,
    DividePipe,
    InstrumentDetailsComponent,
    InstrumentTableComponent,
    InstrumentChangeItemComponent,
    SpinnerOverlayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
