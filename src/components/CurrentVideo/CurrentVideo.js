
import './CurrentVideo.scss'

const CurrentVideo = ({ mainVideo }) => {

    return (
        <div className="video">
            <div className="video__first-div" style={{ width: '100%' }}>
                <video className="video__video" controls poster={mainVideo.image}>
                    <source src={mainVideo.video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>        
    );  
}

export default CurrentVideo;