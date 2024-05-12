import React from 'react';
import videoThumbnail from '../../assets/Images/Upload-video-preview.jpg'
import './Upload.scss'
import publishIcon from '../../assets/Icons/publish.svg'

const Upload = () => {
    return (
        <div className='upload'>
            <h1 className='upload__h1'>Upload Video</h1>
            <div className='upload__div'>
                <div className='upload__thumbDiv'>
                    <p className='upload__thumb-text'>VIDEO THUMBNAIL</p>
                    <img src={videoThumbnail} className='upload__thumb-img' />
                </div>
                <div className='upload__form'>
                   <label className='upload__label'>TITLE YOUR VIDEO</label>
                   <input className='upload__input-title' placeholder='Add a title to your video'/>
                   <label className='upload__label'>ADD A VIDEO DESCRIPTION</label>
                   <textarea className='upload__input-desc'  placeholder='Add a description to your video'/>
                </div>
            </div>
            <div className='upload__icons upload__icons--mobi'>
                <div className='upload__publish-div'>
                   <img className='upload__publish-img' src={publishIcon} alt='publish button icon'/> 
                   <button className='upload__publish'>PUBLISH</button>
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
            
        </div>
    );
};

export default Upload;