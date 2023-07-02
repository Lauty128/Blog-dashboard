//----- Dependencies
import { useArticlesStore } from "../../store"


export function Pagination(){
    //---- States
    const { setArticles, pagination } = useArticlesStore()

    //---- Functions
    function LoadPages():JSX.Element[]{
        //---- An array is created with random values
        const quantityPages = Array.from({length: Math.ceil(pagination.total/pagination.size)}, () => Math.floor(Math.random() * 10));

        return quantityPages.map((_element, index)=>{
            
            return(
                (pagination.page === index)
                ? <span key={index} style={{color:'#FAEDBC'}}>{ index + 1 }</span>
                : <span key={index} onClick={()=> setArticles(index)}>{ index + 1 }</span>
            )
        })
    }

    return (
        <div className="Home__pagination">
            { 
                (pagination.total == 0)
                ? <span>0</span> 
                : LoadPages()
            }
        </div>
    )
}