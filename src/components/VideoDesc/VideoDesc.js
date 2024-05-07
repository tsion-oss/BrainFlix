import viewsIcon from '/Users/zion/Documents/Brainstation/Dev/brainflix/src/assets/Icons/views.svg'
import likesIcon from '/Users/zion/Documents/Brainstation/Dev/brainflix/src/assets/Icons/likes.svg'
import './VideoDesc.scss'

const VideoDesc = ({ mainVideo, formatDate}) => {
  
    return (
        <div className="video-desc">
           <h1 className="video-desc__h1 video-desc__h1--tab">{mainVideo.title}</h1>
           <div className="video-desc__views-div video-desc__views-div--tab">
               <div className="video-desc__channel-div video-desc__channel-div--tab">
                  <p className="video-desc__channel">By {mainVideo.channel}</p>
                  <p className="video-desc__timestamp">{formatDate(mainVideo.timestamp)}</p>
               </div>
               <div className="video-desc__view-div">
                  <div className="video-desc__views">
                     <img className="video-desc__views-icon" src={viewsIcon}/>
                     <p className="video-desc__view">{mainVideo.views}</p>
                  </div>
                  <div className="video-desc__likes">
                     <img src={likesIcon} className="video-desc__like-icon"/>
                     <p className="video-desc__view">{mainVideo.likes}</p>
                   </div>
               </div>
           </div>
           <p className='video-desc__description'>{mainVideo.description}</p>

        </div>
    );
};

export default VideoDesc;