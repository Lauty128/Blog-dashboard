//------- Dependencies
import { useEffect, ReactNode } from "react";
import { useArticlesStore } from "../store";

//------- Models
//import { articleInterface } from "../models";

//------- Services
import { getArticles } from "../services";

//------- Components
import { Link } from 'react-router-dom';
import { Pagination, ArtilceCard } from "../components";




export function ArticlesList(){

    //---- States
    const { articles, setArticles } = useArticlesStore()

    useEffect(()=>{
        if(!articles){
            (async()=>{
                const data = await getArticles()
                if(data) setArticles(0);
            })()
        }
    },[])

    //---- Functions
    function PreLoad():ReactNode[]{
        return [0,1,2,3,4,5].map(element=>(
            <div className="ArticlePreload" key={element}>
                <div className="ArticlePreload__image"></div>
                <div className="ArticlePreload__div">
                    <div className="ArticlePreload__text"></div>
                    <div className="ArticlePreload__title"></div>
                </div>
            </div>
        ))
    }

    return(
        <>
            <h1 className="Home__h1">LISTA DE ARTICULOS</h1>
            
            <div className="Home__articlesContainer">
                <Link to={"/create"} className="Home__createButton">
                    <svg width="24px" height="24px" stroke-width="1.7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#616161"><path d="M8 12h4m4 0h-4m0 0V8m0 4v4M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#616161" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    AGREGAR ARTICULO
                </Link>
                { (articles !== null)
                    ? articles.map(article=> ArtilceCard(article, setArticles) ) 
                    : PreLoad() 
                }
                <Pagination />
            </div>
            
        </>
    )
}