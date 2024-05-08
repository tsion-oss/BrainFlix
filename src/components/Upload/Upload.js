import React from 'react';

const Upload = () => {
    return (
        <div className='upload'>
            <h1 className='upload__h1'>Upload Video</h1>
            <div className='upload__div'>
                <div className='upload__thumbDiv'>
                    <p className='upload__thumb-text'>VIDEO THUMBNAIL</p>
                    <img src='' className='upload_thumb-img' />
                </div>
                <div className='upload__form'>
                   <label>TITLE YOUR VIDEO</label>
                   <input placeholder='Add a title to your video'/>
                   <label>ADD A VIDEO DESCRIPTION</label>
                   <input placeholder='Add a description to your video'/>
                </div>
            </div>
            <div>
                <button>PUBLISH</button>
                <button>CANCEL</button>
            </div>
            
        </div>
    );
};

export default Upload;