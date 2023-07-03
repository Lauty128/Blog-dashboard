//----- Dependencies
import axios from 'axios';
import { articleOKResponse } from '../models';


const api_domain =  import.meta.env.VITE_BLOG_URL

export async function deleteArticle(id:String){
    const data = await axios.delete(`${api_domain}api/articles/${id}`)
    return data
}

// export async function modifyVehicle(id:string, body:any){
//     const data = await axios.put(`${api_domain}/api/vehicles/${id}`, body)
//     return data
// }

export async function newArticle(body:FormData):Promise<articleOKResponse>{
    const data:Promise<articleOKResponse> = await axios.post(`${api_domain}api/articles`, body).then(res => res.data).catch(error => error)
    return data
}

// {
//     "data": {
//         "id": "gej3Es7uFwoAJgA69cpa6QXe",
//         "views": 0,
//         "createdAt": "2023-07-03T12:40:23.916Z",
//         "title": "TITULO DE PRUEBA",
//         "imageContribution": "https://unsplash.com/es/@introspectivedsgn",
//         "createdBy": "jwNdUqPVaOqWr8HObwijC9FV",
//         "category_id": "p4h1dmKNuJer",
//         "content": "# ARTICULO DE PRUEBA PAI\r\n\r\nEste es un articulo para probar las funciones nuevas en las que estoy trabajando\r\n\r\n``` javascript\r\nconst form = e.target as HTMLFormElement\r\n      \r\nconst body = new FormData(form)\r\n```",
//         "image": "https://res.cloudinary.com/dyrpgj8od/image/upload/v1688387948/Blog/gbgbl5kqcxf5bnrn2w71.jpg",
//         "updatedAt": "2023-07-03T12:40:23.917Z"
//     },
//     "message": "Articulo creado correctamente",
//     "status": 201
// }