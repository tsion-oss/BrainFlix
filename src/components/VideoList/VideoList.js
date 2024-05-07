import { useState } from "react";
import { useEffect } from "react";
import './VideoList.scss'

const VideoList = ({ mainVideo, updateMainVideo, videoDetail }) => {
    const [filteredVideos, setFilteredVideos] = useState([])

    useEffect(() => {
        if (mainVideo && videoDetail) {
            const filtered = videoDetail.filter(video => video.id !== mainVideo.id);
            setFilteredVideos(filtered);
        }
    }, [mainVideo, setFilteredVideos]);

    return (
        <div className="next-videos">
            <p className="next-videos__title">NEXT VIDEOS</p>
            <div className="next-videos__div">
                {filteredVideos.map((video) => {
                    return(
                        <div className="next-videos__card" onClick={() => updateMainVideo(video)} key={video.id}>
                            <img className="next-videos__img" src={video.image}/>
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