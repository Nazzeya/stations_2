import { Component} from '@angular/core';
import { IStation } from './models/station';
import { stations as info } from './info/stations';
        
@Component({
    selector: 'data-comp',
    templateUrl: './data.component.html',
    styleUrls: ['./data.component.css']
})
export class DataComponent{ 
      
    message: string = "DataModule";
    stations: IStation[] = info;

    fill:string | undefined;

    colorNum: number = 2;

    isBlack: boolean = true;
    isLightBlue: boolean = false;
    isLightPink: boolean = false;

    change() {
        if(this.isBlack==true) {
            this.isLightBlue=true;
            this.isBlack=false;
        }
        else if (this.isLightBlue==true) {
            this.isLightPink=true;
            this.isLightBlue=false;
        }
        else {
            this.isBlack = true;
            this.isLightPink = false
        }
    }
    
}