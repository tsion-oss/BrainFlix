import React from 'react';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import videoDetail from './data/video-details.json'
import VideoList from './components/VideoList/VideoList';
import Videos from './data/videos.json'
import CurrentVideo from './components/CurrentVideo/CurrentVideo';
import './App.scss'
import VideoDesc from './components/VideoDesc/VideoDesc';
import Comments from './components/Comments/Comments';

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
        <div>
            <CurrentVideo formatDate={formatDate} commentsList={commentsList}  updateMainVideo={updateMainVideo} mainVideo={mainVideo} setMainVideo={setMainVideo} videoDetail={videoDetail} />
            <div className='desktop'>
                <div className='desktop__2'>
                    <VideoDesc formatDate={formatDate}  mainVideo={mainVideo}/>
                    <Comments formatDate={formatDate}  commentsList={commentsList} />
                </div>
                <div className='desktop__3'>
                    <VideoList updateMainVideo={updateMainVideo} setMainVideo={setMainVideo} mainVideo={mainVideo} videoDetail={videoDetail}/>
                </div>
            </div>
        </div>
       </>
    )
}

export default App;