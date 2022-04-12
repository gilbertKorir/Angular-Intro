import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './Data-Binding/property-binding/prop.component';
import { MyForm } from './intro-angular/form-component';
import { EventBindingComponent } from './Data-Binding/event-binding/event-binding.component';
import { InterpolateComponent } from './Data-Binding/interpolate/interpolate.component';
import { TwoWayBindingComponent } from './Data-Binding/two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { StructuralDirectiveComponent } from './Directives/structural-directive/structural-directive.component';
import { NavbarComponent } from './Shopping-list/navbar/navbar.component';
import { CoverComponent } from './Shopping-list/cover/cover.component';
import { CardComponent } from './Shopping-list/card/card.component';
import { AddItemComponent } from './Shopping-list/add-item/add-item.component';
import { CardViewComponent } from './Shopping-list/card-view/card-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MyForm,
    BindingComponent,
    EventBindingComponent,
    InterpolateComponent,
    TwoWayBindingComponent,
    StructuralDirectiveComponent,
    NavbarComponent,
    CoverComponent,
    CardComponent,
    AddItemComponent,
    CardViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
