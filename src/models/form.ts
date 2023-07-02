export interface formValuesInterface{
    name:string
    email:string
    linkedin:string
    message:string
}

export interface expRegularInterface{
    name:RegExp
    email: RegExp
    linkedin: RegExp
}

export interface messageCard{
    message:string
    type:string
}