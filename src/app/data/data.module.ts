import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { DataComponent }   from './data.component';
import { DataRoutingModule } from './data-routing.module';

@NgModule({
    imports:      
    [ BrowserModule, FormsModule, DataRoutingModule ],
    declarations: [ DataComponent],
    exports: [ DataComponent]
})
export class DataModule { }