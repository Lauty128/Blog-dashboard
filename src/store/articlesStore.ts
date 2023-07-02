//------- Dependencies
import { getArticles } from '../services/getData';

//------- Dependencies
import { create } from 'zustand';

//------- Models
import { articleInterface, paginationInterface } from '../models';

interface articlesStoreInterface{
    articles: articleInterface[] | null
    pagination: paginationInterface

    setArticles: (page:number) => Promise<void>
}

export const useArticlesStore = create<articlesStoreInterface>((set) => ({
    articles: null,
    pagination: { size:7, page:0, total:0 },

    setArticles: async(page:number)=>{
        const data = await getArticles(7,page)
        set(state=>({
            pagination:{ ...state.pagination, page, total: data ? data.total : 0 },
            articles: data ? data.data : null
        }))
    },
}))