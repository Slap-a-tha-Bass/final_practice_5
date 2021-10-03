export interface mysqlResponse {
    affectedRows: number,
    insertId: number,
    sqlMessage: string
}
export interface Books {
    id?: number,
    title?: string,
    author?: string,
    categoryid?: number,
    price?: number,
    _created?: Date,
    isPreview?: boolean
}
export interface Categories {
    id: number,
    name: string
}