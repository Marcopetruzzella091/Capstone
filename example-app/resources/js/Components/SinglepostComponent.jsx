import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import PostComment from './PostComment';
import ListlikeComponent from './ListlikeComponent';
import ListLikeCommentComponent from './ListLikeCommentComponent';

export default function SinglepostComponent(props) {
  const [postToDelete, setPostToDelete] = useState(null);

console.log(props)


  const handleDeletePost = (post) => {
    router.visit('/post', {
      method: 'delete',
      data: {
        postid: post
      },
      preserveScroll: true
    });
  };

  const handleDeleteComment = (comment) => {
    router.visit('/comment', {
      method: 'delete',
      data: {
        commentid: comment
      },
      preserveScroll: true
    });
  };
 console.log(props)
  const handlelike = (postid, userid, userliked) => {
    
    router.visit('/like', {
      method: 'post',
      data: {
        postid: postid,
        userid: userid,
        userliked: userliked
      },
      preserveScroll: true
    });
  };

  const handlelikecomment = (commentid, userid) => {
    router.visit('/commentlike', {
      method: 'post',
      data: {
        commentid: commentid,
        userid: userid
      },
      preserveScroll: true
    });
  };

  return (
    <>
      {props.post.reverse().map((post, index , arr) => (
         <div  className={` ${props.action.post_created != undefined && index === 0 ? "animate__animated animate__fadeInDown" : ""}`}  key={post.id}>
          <div className="facebook-post bg-white">
            
            <div className="post-header">
              <img src={`/storage/${post.user.image_url}`} onClick={() => router.visit(`/alluser/${post.user.id}`)} alt="Immagine Profilo" className="profile-pic" />
              <div>
                <strong>{post.user.name + " " + post.user.surname}</strong> <br />
                <span>ha pubblicato un post</span>
                <div className="post-time">{post.created_at.slice(0, 10)}</div>
              </div>
            </div>

            <div className="post-content">
             { post.trend && <p ><b>#{post.trend}</b></p>}
              <p>{post.post_content}</p>
            </div>
            <div className="post-footer">
              <span onClick={() => handlelike(post.id, props.auth, post.user.id)}>
                <span >{post.like.every(like => like.user_id !== props.auth) ? <i className="bi bi-hand-thumbs-up " onClick={() => handlelike(post.id, props.auth)}></i>: <i onClick={() => handlelike(post.id, props.auth)} className="bi bi-hand-thumbs-up-fill"></i>}</span>
              </span>
              <ListlikeComponent  post={post} userlog={props} />
              <PostComment post={post} userlog={props} />  <span className="mx-2"> Condividi </span>
              {(post.user_id === props.auth || props.auth === post.board_user_id) && (
                <button onClick={() => handleDeletePost(post.id)}>    Elimina</button>
              )}
            </div>

             {/* Commenti */}
          {post.comment.length > 0 && post.comment.map((comment) => (
            <div className=" m-3" key={comment.id}>
              <div className="facebook-post">
                <div className="post-header">
                  <img src={`/storage/${comment.user.image_url}`} alt="Immagine Profilo" className="profile-pic" />
                  <strong>{comment.user.name}</strong>
                </div>
                <div className="post-content">
                  <p>{comment.comment_content}</p>
                </div>
                <div className="post-footer">
                  <span onClick={() => handlelikecomment(comment.id, props.auth)}>
                    <span className="mx-2">{comment.commentlikes.every(like => like.user_id !== props.auth) ? "Mi Piace" : "Rimuovi Mi Piace"}</span>
                  </span>
                  <ListLikeCommentComponent post={post} comment={comment} userlog={props} />  rispondi ·
                  {(props.auth === comment.user_id || props.auth === post.board_user_id) && (
                    <button onClick={() => handleDeleteComment(comment.id)}>Elimina</button>
                  )}
                </div>
              </div>
            </div>
          ))}


          </div>

        
        </div>
      ))}
    </>
  );
}
