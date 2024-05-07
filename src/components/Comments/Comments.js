import { useEffect, useState } from "react";
import commentIcon from "../../assets/Icons/add_comment.svg"
import './Comments.scss'
import avatar from '../../assets/Images/Mohan-muruge.jpg'

const Comments = ({ commentsList, formatDate }) => {
   const [comments, setComments] = useState(commentsList)
   useEffect(() => {
    if(commentsList){
        setComments(commentsList)
    }
    }, [commentsList, comments])
    const commentsLength = comments.length
   
    return (
      <div className="comment">
        <p className="comment__index">{commentsLength} Comments</p>
        <div className="comment__form-div">
            <img src={avatar} className="comment__avatar comment__avatar--tab"/>
            <form className="comment__form comment__form--tab">
               <div className="comment__input-div">
                   <p className="comment__join">JOIN THE CONVERSATION</p>
                   <input placeholder="Add a new comment" className="comment__input"/>
               </div>
               <div className="comment__button-div">
                  <img src={commentIcon} className="comment__button-icon"/>
                  <button className="comment__button">COMMENT</button>
               </div>
            </form>
        </div>
        <div className="comment__list">
         {comments.map((comment) => {
            return(
                <div key={comment.id} className="comment__lists">
                    <img className="comment__img-avatar"  />
                    <div className="comment__inside-div">
                        <div className="comment__name-date">
                            <p className="comment__name">{comment.name}</p>
                            <p className="comment__timestamp">{formatDate(comment.timestamp)}</p>
                        </div>
                        <p className="comment__text">{comment.comment}</p>
                    </div>
                </div>
            )
         })
         }
        </div>
      </div>
    );
};

export default Comments;