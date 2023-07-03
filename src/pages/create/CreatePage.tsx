//------- Dependencies
import { useState } from "react"
import { Link } from "react-router-dom"
import { FormEvent } from "react"

//------- Data
import { Writers, Categories } from "./data/articlesData"

//------- Utils
import { capture_image } from "./utils/controller.util"
import { newMessage } from "../../utils/effects.util"

//------- Service
import { newArticle } from "../../services"


export function CreatePage(){
    //------ States
    const [ image, setImage ] = useState<string | null>(null)
    
    //------ Functions
    function changeImage(){
        const imageInput = document.getElementById('image-input') as HTMLInputElement
        imageInput.click()
    }

    async function handlerSubmit(e:FormEvent){
        e.preventDefault()

        const form = e.target as HTMLFormElement
        const body = new FormData(form)
        const response = await newArticle(body)

        newMessage({
            type: (response.status == 201) ? "OK" : "ERROR",
            message: response.message || ""
        })
        //return location.href = '/'
    }

    return(
        <>
            <Link to={'/'} className="ComeBack">
                <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FAEDBC"><path d="M16 12H8m0 0l3.5 3.5M8 12l3.5-3.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#FAEDBC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                Volver a inicio
            </Link>
            <h1 className="Home__h1">NUEVO ARTICULO</h1>

            <form method="post" className="Form" onSubmit={(e)=> handlerSubmit(e)}>
                <div className={`Form__imageContainer ${image ? 'Form__imageContainer--active' : ''} row2span`}>
                    {
                        (image)
                        ? <>
                            <svg onClick={()=> changeImage()} width="24px" height="24px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FAEDBC"><path d="M9.019 9A6.5 6.5 0 1115 14.981M8.5 22a6.5 6.5 0 110-13 6.5 6.5 0 010 13zM22 17a3 3 0 01-3 3h-2m0 0l2-2m-2 2l2 2M2 7a3 3 0 013-3h2m0 0L5 6m2-2L5 2" stroke="#FAEDBC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            <img src={image} className="Form__image" alt="previsualizacion" />
                          </>
                        : <label htmlFor="image-input" className="Form__newImage">
                            <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6 12h6m6 0h-6m0 0V6m0 6v6" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            Agregar Imagen
                          </label>
                    }
                    <input type="file" name="image" id="image-input" style={{ display:'none' }} onChange={(e)=> capture_image(e.target.files, setImage)} />
                </div>

                <input className="Form__input" type="text" name="title" placeholder="Titulo" />
                
                <input className="Form__input" type="text" name="imageContribution" placeholder="Dueño de imagen" />
                
                <div className="Form__inputContainer">
                    <label htmlFor="createdBy-input">Escrito por:</label>
                    <select className="Form__input" name="createdBy" id="createdBy-input">
                        {
                            Writers.map(writer=> <option value={writer.id} key={writer.id}>{ writer.name }</option>)
                        }
                    </select>
                </div>

                <div className="Form__inputContainer">
                    <label htmlFor="category_id-input">Cateogoria:</label>
                    <select className="Form__input" name="category_id" id="category_id-input">
                        {
                            Categories.map(category=> <option value={category.id} key={category.id}>{ category.name }</option>)
                        }
                    </select>
                </div>

                <textarea name="content" className="Form__input column2span" placeholder="Contenido" rows={30}></textarea>

                <input type="submit" value="NUEVO ARTICULO" className="Form__submit column2span" />
            </form>
        </>
    )
}