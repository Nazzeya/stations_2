import { IFigure } from "../models/figure";

export const figures: IFigure[] = [
    {
        id: 1,
        rect: {
            coordinates: {
                x: 50,
                y: 100,
            },
            width: 100,
            height: 50
        }
    },
    {
        id: 2,
        rect: {
            coordinates: {
                x: 200,
                y: 100,
            },
            width: 100,
            height: 50
        },
        fill: "blue"
    },
    {
        id: 3,
        rect: {
            coordinates: {
                x: 350,
                y: 100,
            },
            width: 100,
            height: 50
        }
    },
    {
        id: 4,
        circle: {
            coordinates: {
                x: 100,
                y: 200
            },
            r: 30
        }
    },
    {
        id: 5,
        ellipse: {
            coordinates: {
                x: 300,
                y: 250
            },
            rx: 60,
            ry: 30
        }
    },
    {
        id: 6,
        text: {
            coordinates: {
                x: 400,
                y: 250
            },
            text: "Hello"
        }
    },
    {
        id: 7,
        line: {
            points: "500,275 150,275 200,275 200,375 150,375 200,375 200,475 150,475 200,475 200,425 600,425"
        },
        fill: "none",
        stroke: "blue"
    }
]