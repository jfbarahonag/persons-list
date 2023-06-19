import { DataServices } from './data.service';
import { AppRoutingModule } from './app-routing.module';
import { PersonsService } from './persons.service';
import { LoggingService } from './logging.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonComponent } from './persons/person/person.component';
import { FormComponent } from './persons/form/form.component';
import { PersonsComponent } from './persons/persons.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, PersonComponent, FormComponent, PersonsComponent, ErrorComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [LoggingService, PersonsService, DataServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
