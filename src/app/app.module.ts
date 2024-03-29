import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { response } from '../response';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, AccountDetailsComponent],
  providers: [response],
  bootstrap: [AppComponent]
})
export class AppModule { }
