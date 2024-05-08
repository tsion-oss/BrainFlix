import React from 'react';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import videoDetail from './data/video-details.json'
import './App.scss'
import MainVideo from './pages/MainVideo';
import VideoUpload from './pages/VideoUpload';
import { Routes, Route } from 'react-router-dom';

const App = () => {
    const [mainVideo, setMainVideo] = useState(videoDetail && videoDetail.length > 0 ? videoDetail[0] : null)
  
    const [commentsList, setCommentsList] = useState(mainVideo.comments)

    const updateMainVideo = (video) => {
        setMainVideo(video)
        setCommentsList(video.comments)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    function formatDate(timestamp){
        const date = new Date(timestamp)
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        return `${month}/${day}/${year}`
      }
    return (
       <>
        <Nav/>
        <Routes>
           <Route path='/' element={<MainVideo formatDate={formatDate} commentsList={commentsList} updateMainVideo={updateMainVideo} mainVideo={mainVideo} setMainVideo={setMainVideo} videoDetail={videoDetail}>
             <Route path=':id' element={<MainVideo />}/>
           </MainVideo>}/>
           <Route path='/video' element={<VideoUpload/>} /> 
        </Routes>
       </>
    )
}

export default App;