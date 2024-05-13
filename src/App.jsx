
import Nav from './components/Nav/Nav';
import './App.scss'
import MainVideo from './pages/MainVideo';
import VideoUpload from './pages/VideoUpload';
import { Routes, Route } from 'react-router-dom';

const App = () => {
 
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