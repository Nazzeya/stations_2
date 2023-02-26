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
        height: 30,
        fill: 'black'
    },
    {
        id: 2,
        type: "circle",
        coordinates: {
            x: 100,
            y: 200
        },
        r: 20
    },
    {
        id: 3,
        type: "rect",
        coordinates: {
            x: 200,
            y: 100
        },
        width: 50,
        height: 60,
        fill: 'black'
    },
    {
        id: 4,
        type: "text",
        coordinates: {
            x: 200,
            y: 200
        },
        text: "Some text"
    }
]