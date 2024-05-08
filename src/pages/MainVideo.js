import CurrentVideo from "../components/CurrentVideo/CurrentVideo";
import VideoDesc from "../components/VideoDesc/VideoDesc";
import Comments from "../components/Comments/Comments";
import VideoList from "../components/VideoList/VideoList";

const MainVideo = ({ formatDate, commentsList, updateMainVideo, mainVideo, setMainVideo, videoDetail }) => {
    return (
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
    );
};

export default MainVideo;