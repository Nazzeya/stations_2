import { IFigure } from '../models/figure';
import { figures as info } from '../data/figures';

export class DataService {

    private types: string[] = ["rect", "circle", "ellipse", "polygon", "polyline", "text"];

    figures: IFigure[] = info;

    getTypes(): string[] {
        return this.types;
    } 
}