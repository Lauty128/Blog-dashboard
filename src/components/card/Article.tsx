
//----- Models
import { articleInterface } from "../../models"

//------- Components
import { Link } from 'react-router-dom';

//------- Utils
import { parseTitle } from "../../utils/article.util"


export function ArtilceCard(article:articleInterface){
    const date = new Date(article.createdAt)

    return  <Link to={`/${parseTitle(article.title)}`} className="ArticleCard" key={`${article.id}`}>
                <img src={article.image} alt={article.alt} className="ArticleCard__image" data-aos="fade-left" />
                <div className="ArticleCard__div"  data-aos="fade-left">
                    <span className="ArticleCard__span">
                        <svg width="18px" height="18px" strokeWidth={1.2} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FAEDBC"><path d="M12 6v6h6" stroke="#FAEDBC" strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"}></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#FAEDBC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        {date.toLocaleDateString("es-ES",{year: "numeric", month: "long", day: "numeric"})}
                    </span>
                    <h3 className="ArticleCard__h3">{article.title}</h3>
                </div>
            </Link>
}