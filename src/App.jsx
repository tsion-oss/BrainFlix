
import Nav from './components/Nav/Nav';
import './App.scss'
import MainVideo from './pages/MainVideo';
import VideoUpload from './pages/VideoUpload';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  //  https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=af59a8b5-165d-462c-b5ec-39a64a26a5f2
    return (
       <>
        <Nav/>
        <Routes>
           <Route path='/' element={<MainVideo/>}/>
           <Route path='/:id' element={<MainVideo />}/>
           <Route path='/video' element={<VideoUpload/>} /> 
        </Routes>
       </>
    )
}

export default App;