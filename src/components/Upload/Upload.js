import React from 'react';
import videoThumbnail from '../../assets/Images/Upload-video-preview.jpg'
import './Upload.scss'
import publishIcon from '../../assets/Icons/publish.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Upload = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault()
        setTimeout(() => {
            alert('Video uploaded')
            navigate('/')
        }, 1000)
        setTitle('');
        setDescription('');
    }

    return (
        <form className='upload' onSubmit={handleSubmit}>
            <h1 className='upload__h1'>Upload Video</h1>
            <div className='upload__div'>
                <div className='upload__thumbDiv'>
                    <p className='upload__thumb-text'>VIDEO THUMBNAIL</p>
                    <img src={videoThumbnail} className='upload__thumb-img' />
                </div>
                <div className='upload__form' >
                   <label className='upload__label' >TITLE YOUR VIDEO</label>
                   <input className='upload__input-title'    placeholder='Add a title to your video'
                   onChange={(e) => setTitle(e.target.value)}/>
                   <label className='upload__label'>ADD A VIDEO DESCRIPTION</label>
                   <textarea className='upload__input-desc'  placeholder='Add a description to your video'
                   onChange={(e) => setDescription(e.target.value)}/>
                </div>
            </div>
            <div className='upload__icons upload__icons--mobi'>
                <div className='upload__publish-div'>
                   <img className='upload__publish-img' src={publishIcon} alt='publish button icon'/> 
                   <button type='submit' className='upload__publish'>PUBLISH</button>
                </div>
                <button className='upload__cancel'>CANCEL</button>
            </div>
            <div className='upload__icons upload__icons--tab'>
                <button className='upload__cancel'>CANCEL</button>
                <div className='upload__publish-div'>
                   <img className='upload__publish-img' src={publishIcon} alt='publish button icon'/> 
                   <button className='upload__publish'>PUBLISH</button>
                </div>
            </div>
            
        </form>
    );
};

export default Upload;