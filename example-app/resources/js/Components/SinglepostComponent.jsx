import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import PostComment from './PostComment';
import ListlikeComponent from './ListlikeComponent';

export default function SinglepostComponent(props) {
  const [postToDelete, setPostToDelete] = useState(null);
  
  //console.log(props.post.every(oggetto => oggetto.nome !== valoreDaCercare));
  // let  like =oggetti.every(oggetto => oggetto.nome !== valoreDaCercare);
  
  //( props.info.follower.find(oggetto => oggetto.user.id === props.info.auth.user.id))


  const handleDeletePost = (post) => {
    router.visit('/post', {
      method: 'delete',
      data: {
        postid: post
      }, preserveScroll: true
    });
  };

  const handleDeleteComment = (comment) => {
    router.visit('/comment', {
      method: 'delete',
      data: {
        commentid: comment
      }, preserveScroll: true
    });
  };

  const handlelike = (postid, userid) => {
    router.visit('/like', {
      method: 'post',
      data: {
        postid :postid,
        userid: userid

      }, preserveScroll: true
    });
    }

const handlelikecomment = (commentid, userid) => {
  router.visit('/like', {
    method: 'post',
    data: {
      commentid :commentid,
      userid: userid}, preserveScroll: true
  });
  }
  return (
    <>
      {props.post.reverse().map((post) => (
        <div className="section-box mt-4" key={post.id}>
          <div className="facebook-post">
           
            <div className="post-header">
              <img src={`/storage/${post.user.image_url}`} alt="Immagine Profilo" className="profile-pic" />
              <div><strong>{post.user.name + " " + post.user.surname}</strong> <br /><span >ha pubblicato un post</span>
              <div className="post-time"> {post.created_at.slice(0, 10)}</div></div> 
              
              
              
             
            </div>
           
            <div className="post-content">
              <p>{post.post_content}</p>
            </div>
            <div className="post-footer">
              <span onClick={() => handlelike(post.id, props.auth)}>
                
               <span className="mx-2">{post.like.every(like => like.user_id !== props.auth ) ? "Mi Piace" : "Rimuovi Mi Piace"}</span> 
                
                 </span><ListlikeComponent post={post} userlog = {props} />  <PostComment post={post} userlog = {props} />  · Condividi {(post.user_id === props.auth || props.auth === post.board_user_id) && (
                <button onClick={() => handleDeletePost(post.id)} >Elimina</button>
              )}
            </div>
          </div>

          {/* Commenti */}
           {post.comment.length > 0 && post.comment.map((comment) => (
            <div className="section-box mt-1" key={comment.id}>
              <div className="facebook-post">
                <div className="post-header">
                  <img src={`/storage/${comment.user.image_url}`} alt="Immagine Profilo" className="profile-pic" />
                  <strong>{comment.user.name}</strong>
                </div>
                <div className="post-content">
                  <p>{comment.comment_content}</p>
                </div>
                <div className="post-footer">
                 
                  Mi Piace · rispondi · {(props.auth === comment.user_id || props.auth === post.board_user_id)

                   && (
                    <button onClick={() => handleDeleteComment(comment.id)} >Elimina</button>
                  )}
                </div>
              </div>
            </div>
          ))} 
        </div>
      ))}
    </>
  );
}
