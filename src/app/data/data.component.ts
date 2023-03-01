import { Component} from '@angular/core';
import { IFigure } from './models/figure';
import { figures as info } from './data/figures';
import { DataService } from './services/data.service';
        
@Component({
    selector: 'data-comp',
    templateUrl: './data.component.html',
    styleUrls: ['./data.component.css'],
    providers: [DataService]
})
export class DataComponent{ 

    constructor(private dataService: DataService){}
    
    figures: IFigure[] = info;

    type: string = "";

    //rect (width, height, x, y, fill, stroke)
    width: number = 0;
    height: number = 0; 

    //circle (cx, cy, r, fill, stroke)
    radiusC: number = 0;

    //ellipse (cx, cy, rx, ry, fill, stroke)
    radiusX: number = 0;
    radiusY: number = 0;

    //text (x, y)
    text: string = "";

    xCoord: number = 0;
    yCoord: number = 0;

    //polygon (points, fill, stroke)
    //polyline (points, fill, stroke)
    points: string = "0";

    fill: string = "none";
    stroke: string = "none";


    types: string[] = [];

    addFigure(){
        this.figures.push(
            {
                id: this.figures.length,
                type: this.type,
                coordinates: {
                    x: this.xCoord,
                    y: this.yCoord
                },
                width: this.width,
                height: this.height,
                r: this.radiusC,
                rx: this.radiusX,
                ry: this.radiusY,
                text: this.text,
                points: this.points,
                fill: this.fill,
                stroke: this.stroke
            }
        )
    }

    changeColor(figure: IFigure){
        this.figures = this.figures.map((item) => (
        item.id === figure.id
        ? { ...item, fill: this.colors(figure.fill) }
        : item
        ));
    }

    textChange(figure: IFigure){
        let now = new Date();
        const date = now.toLocaleString('ru-RU', {day: 'numeric', hour: 'numeric', second: 'numeric'})
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
        else if(color=="blue"){
            color="red"
        }
        else if(color=="red"){
            color="purple"
        }
        else if(color=="purple"){
            color="orange"
        }
        else{
            color="black"
        }
        return color;
    }

    ngOnInit() {
        this.types = this.dataService.getTypes();
    }
}