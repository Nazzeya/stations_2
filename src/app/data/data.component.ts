import { Component} from '@angular/core';
import { IFigure } from './models/figure';
import { figures as info } from './data/figures';
        
@Component({
    selector: 'data-comp',
    templateUrl: './data.component.html',
    styleUrls: ['./data.component.css']
})
export class DataComponent{ 
    
    figures: IFigure[] = info;
}