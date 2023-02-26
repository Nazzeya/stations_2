export interface IFigure {
    id: number,
    type: string,
    coordinates?: ICoord
    width?: number,
    height?: number,
    points?: string,
    r?: number,
    rx?: number,
    ry?: number,
    text?: string,
    fill?: string, //цвет фигуры
    stroke?: string, //цвет обводки
    strokeWidth?: number, //размер обводки в px
}

export interface ICoord {
    x: number,
    y: number
}
