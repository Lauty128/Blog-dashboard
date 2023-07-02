//--------- Dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//--------- Dependencies
import { ArticlesList } from './components/ArticlesList';

//--------- Styles
import './styles/index.scss'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ArticlesList />} />
        {/* <Route path='/:title' element={<ArticleLayout />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
