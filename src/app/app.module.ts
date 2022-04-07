import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './Data-Binding/property-binding/prop.component';
import { MyForm } from './intro-angular/form-component';
import { EventBindingComponent } from './Data-Binding/event-binding/event-binding.component';
import { InterpolateComponent } from './Data-Binding/interpolate/interpolate.component';

@NgModule({
  declarations: [
    AppComponent,
    MyForm,
    BindingComponent,
    EventBindingComponent,
    InterpolateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
