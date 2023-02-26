import { IFigure } from "../models/figure";

export const figures: IFigure[] = [
    {
        id: 1,
        type: "rect",
        coordinates: {
            x: 30,
            y: 30
        },
        width: 40,
        height: 30
    },
    {
        id: 2,
        type: "circle",
        coordinates: {
            x: 100,
            y: 200
        },
        r: 20
    }
]