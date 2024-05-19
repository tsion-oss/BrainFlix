import CurrentVideo from "../../components/CurrentVideo/CurrentVideo";
import VideoDesc from "../../components/VideoDesc/VideoDesc";
import Comments from "../../components/Comments/Comments";
import VideoList from "../../components/VideoList/VideoList.js";
import axios, { all } from 'axios'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MainVideo = () => {
    const baseUrl = 'http://localhost:3000'

    const [mainVideo, setMainVideo] = useState({})
    const [nextVideos, setNextVideos] = useState([])
    const [commentsList, setCommentsList] = useState([])
   
    useEffect(() => {
        const getData = async () => {
            try{
                const response = await axios.get(`${baseUrl}/videos`)
                setNextVideos(response.data)
                const { data } = await axios.get(`${baseUrl}/videos/${response.data[0].id}`)
                setMainVideo(data)
                setCommentsList(data.comments)
            } catch (error) {
                console.error('Error getting data', error)
            }
        }
        
        getData()
    }, [])
 
    function formatDate(timestamp){
        const date = new Date(timestamp)
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        return `${month}/${day}/${year}`
    }

    const updateVideo = async (video) => {
        if (video){
            const { data } = await axios.get(`${baseUrl}/videos/${video.id}?`)
            setMainVideo(data)
            setCommentsList(data.comments)
        }
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
       
    }

    return (
        <div>
        <CurrentVideo mainVideo={mainVideo} setMainVideo={setMainVideo}  />
        <div className='desktop'>
            <div className='desktop__2'>
                <VideoDesc mainVideo={mainVideo} formatDate={formatDate} />
                <Comments commentsList={commentsList} setCommentsList={setCommentsList} mainVideo={mainVideo} formatDate={formatDate} />
            </div>
            <div className='desktop__3'>
                <VideoList   mainVideo={mainVideo}  setMainVideo={setMainVideo} nextVideos={nextVideos} updateVideo={updateVideo}
                   />
            </div>
        </div>
    </div>
    );
};

export default MainVideo;