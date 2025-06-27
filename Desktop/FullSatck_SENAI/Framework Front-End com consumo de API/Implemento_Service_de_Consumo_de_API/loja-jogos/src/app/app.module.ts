import { FormsModule } from '@angular/forms'; // <-- Necessárioadicionar essa importação
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule // <-- Necessário para usar [(ngModel)]
    ],
})
export class AppModule { }
