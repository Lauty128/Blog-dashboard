//--------- Dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//--------- Components
import { ArticlesList } from './pages/ArticlesList';
import { CreatePage } from './pages/create/CreatePage';
import { MessageBox } from './components';

//--------- Styles
import './styles/index.scss'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ArticlesList />} />
        <Route path='/create' element={<CreatePage />} />
        {/* <Route path='/:title' element={<ArticleLayout />} /> */}
      </Routes>
    </BrowserRouter>
    
    <MessageBox />
    </>
  )
}

export default App
