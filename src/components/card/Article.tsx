//----- Models
import { articleInterface } from "../../models"

//------- Components
//import { Link } from 'react-router-dom';

//------- Utils
//import { parseTitle } from "../../utils/article.util"

//------- Utils
import { deleteArticle } from "../../services";
import { newMessage } from "../../utils/effects.util";


export function ArtilceCard(article:articleInterface, setArticles: { (page: number): Promise<void>; (arg0: number): void; }){
    const date = new Date(article.createdAt)

    //----- Functions
    async function Delete(id:String){
        const response = await deleteArticle(id)

        newMessage({
            type:(response.data.status == 200) ? "OK" : "ERROR",
            message: response.data.message || 'Ocurrio un error mientras se eliminaba el articulo'
        })

        if(response.data.status == 200) setArticles(0)

    }
//to={`/${parseTitle(article.title)}`}
    return  <div className="ArticleCard" key={`${article.id}`}>
                <img src={article.image} alt={article.alt} className="ArticleCard__image" data-aos="fade-left" />
                <div className="ArticleCard__div"  data-aos="fade-left">
                    <span className="ArticleCard__span">
                        <svg width="18px" height="18px" strokeWidth={1.2} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FAEDBC"><path d="M12 6v6h6" stroke="#FAEDBC" strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"}></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#FAEDBC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        {date.toLocaleDateString("es-ES",{year: "numeric", month: "long", day: "numeric"})}
                    </span>
                    <h3 className="ArticleCard__h3">{article.title}</h3>
                </div>
                <div className="ArticleCard__options">
                    <span className="ArticleCard__option" onClick={()=> Delete(article.id)}>
                        <svg width="20px" height="20px" viewBox="0 0 24 24" strokeWidth={2} fill="none" xmlns="http://www.w3.org/2000/svg" color="#883232"><path d="M20 9l-1.995 11.346A2 2 0 0116.035 22h-8.07a2 2 0 01-1.97-1.654L4 9M21 6h-5.625M3 6h5.625m0 0V4a2 2 0 012-2h2.75a2 2 0 012 2v2m-6.75 0h6.75" stroke="#883232" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </span>
                </div>
            </div>
}