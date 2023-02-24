import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { DataComponent }   from './data.component';
import { DataRoutingModule } from './data-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:      
    [ CommonModule, FormsModule, DataRoutingModule ],
    declarations: [ DataComponent],
    exports: [ DataComponent]
})
export class DataModule { }