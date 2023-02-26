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

    type: string = ""

    // addFigure(){
    //     this.figures.push(
    //         {
    //             id: this.figures.length,
    //             type: this.type
    //         }
    //     )
    // }

    changeColor(figure: IFigure){
        this.figures = this.figures.map((item) => (
        item.id === figure.id
        ? { ...item, fill: this.colors(figure.fill) }
        : item
        ));
    }

    textChange(figure: IFigure){
        let now = new Date();
        const date = now.toLocaleString('ru-RU', {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', second: 'numeric'})
        const dateDst = date.split(".").reverse().join("-");

        this.figures = this.figures.map((item) => (
            item.id === figure.id
        ? { ...item, text: dateDst}
        : item
        ));
    }

    colors(color?: string){
        if(color=="black"){
            color="pink";
        }
        else if(color=="pink"){
            color="blue";
        }
        else{
            color="black"
        };
        return color;
    }
}