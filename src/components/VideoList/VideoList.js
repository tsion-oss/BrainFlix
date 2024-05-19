import { useState } from "react";
import { useEffect } from "react";
import './VideoList.scss'
import { Link, useParams } from "react-router-dom";


const VideoList = ({ nextVideos, mainVideo, updateVideo }) => {
    const [filteredVideos, setFilteredVideos] = useState([])
    useEffect(() => {
        try {
            if (mainVideo && nextVideos) {
                const filtered = nextVideos.filter(video => video.id !== mainVideo.id);
                setFilteredVideos(filtered);
            }
        } catch (error) {
            console.error('Error filtering videos:', error);
        }
    }, [mainVideo, nextVideos]);


   

    return (
        <div className="next-videos">
            <p className="next-videos__title">NEXT VIDEOS</p>
            <div className="next-videos__div">
                {filteredVideos.map((video) => {
                    return(
                        <div  className="next-videos__card"  key={video.id}>
                            <Link to={`/${video.id}`} onClick={() => {updateVideo(video)}} ><img  className="next-videos__img" src={video.image}/></Link>
                            <div className="next-videos__desc">
                                <p className="next-videos__title1">{video.title}</p>
                                <p className="next-videos__channel">{video.channel}</p>
                            </div>
                        </div>
                        
                    )
                })
                }
            </div>
        </div>
    )
}

export default VideoList;