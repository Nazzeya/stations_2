export interface IStation {
    id: number,
    coordinates: ICoord,
    size: ISize
}

export interface ICoord {
    x: number,
    y: number
}

export interface ISize {
    width: number,
    height: number
}
