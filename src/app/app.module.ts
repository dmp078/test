import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddressComponent } from './Checkout/address/address.component';
import { NewComponent } from './Checkout/new/new.component';
import { EditComponent } from './Checkout/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    NewComponent,
    EditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
