import { useState } from "react"
import VideoDesc from "../VideoDesc/VideoDesc"
import Comments from "../Comments/Comments";
import './CurrentVideo.scss'


const CurrentVideo = ({ mainVideo, setMainVideo, commentsList, formatDate  }) => {

    return (
        <div className="video">
            <div className="video__first-div" style={{ width: '100%' }}>
                <video className="video__video" controls poster={mainVideo.image}>
                    <source src={mainVideo.video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <VideoDesc formatDate={formatDate}  mainVideo={mainVideo}/>
            <Comments formatDate={formatDate}  commentsList={commentsList} setMainVideo={setMainVideo} mainVideo={mainVideo}/>
        </div>        
    );  
}

export default CurrentVideo;