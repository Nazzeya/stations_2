export interface IFigure {
    id: number,
    polygon?: IPolygon,
    rect?: IRect,
    circle?: ICircle,
    ellipse?: IEllipse,
    line?: ILine,
    text?: IText, 
    fill?: string //цвет фигуры
    stroke?: string, //цвет обводки
    strokeWidth?: number, //размер обводки в px
}

export interface ICoord {
    x: number,
    y: number
}

export interface IPolygon {
    points: string
}

export interface IRect {
    coordinates: ICoord,
    width: number,
    height: number
}

export interface ICircle {
    coordinates: ICoord
    r: number
}

export interface IEllipse {
    coordinates: ICoord
    rx: number,
    ry: number
}

export interface ILine {
    points: string
}

export interface IText {
    coordinates: ICoord
    text: string
    class?: string
}
