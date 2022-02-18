import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Web3Component } from './web3/web3.component';

// services import
import { ContractService } from './contract.service';
import { MetaMaskService } from './metamask.service';

@NgModule({
  declarations: [
    AppComponent,
    Web3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MetaMaskService,
    ContractService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
