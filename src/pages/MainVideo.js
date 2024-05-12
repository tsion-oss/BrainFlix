import CurrentVideo from "../components/CurrentVideo/CurrentVideo";
import VideoDesc from "../components/VideoDesc/VideoDesc";
import Comments from "../components/Comments/Comments";
import VideoList from "../components/VideoList/VideoList";
import axios, { all } from 'axios'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MainVideo = () => {

    const apiKey = '9f512652-f06f-4595-8c84-02c3e5aba23e'
    const baseUrl = 'https://unit-3-project-api-0a5620414506.herokuapp.com'

    const [mainVideo, setMainVideo] = useState({})
    const [nextVideos, setNextVideos] = useState([])
    const [commentsList, setCommentsList] = useState([])
    // const [ids, setIds] = useState()
    const { id } = useParams()
    
    useEffect(() => {
        const getData = async () => {
            try{
                const response = await axios.get(`${baseUrl}/videos?api_key=${apiKey}`)
                setNextVideos(response.data)
                const { data } = await axios.get(`${baseUrl}/videos/${response.data[0].id}?api_key=${apiKey}`)
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
            const { data } = await axios.get(`${baseUrl}/videos/${video.id}?api_key=${apiKey}`)
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