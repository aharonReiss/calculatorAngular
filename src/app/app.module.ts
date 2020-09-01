import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPodyCalculatorComponent } from './commponents/app-pody-calculator/app-pody-calculator.component';
import { AppButtonsComponent } from './commponents/app-buttons/app-buttons.component';
import { AppHeaderComponent } from './commponents/app-header/app-header.component';
import { FormsModule, FormControl } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppPodyCalculatorComponent,
    AppButtonsComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    //FormControl
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
