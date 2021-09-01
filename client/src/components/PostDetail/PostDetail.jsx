import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
// import {getOnePost} from '../../components/PostDetail/PostDetail'
import {getOnePost} from "../../services/posts"
import {postComment} from "../../services/comments"
import {Link} from "react-router-dom"
import AddComment from "../AddComment/AddComment"

export default function PostDetail(props) {
    const [postItem, setPostItem] = useState(null)
    const [selectedComment, setSelectedComment] = useState('')
    const {id} = useParams()
    const {comments} = props

    useEffect(()=> {
        const fetchPostItem = async () => {
            const postData = await getOnePost(id);
            setPostItem(postData)
        };
        fetchPostItem();
    }, [id]);

    

    const handleSubmit = async (commentData) => {
    
    const postItem = await postComment(commentData);
    setPostItem(postItem);
    };


    return (
        <div className = "center">
            <h3>{postItem?.title}</h3>
            <img src ={postItem?.imgURL}/>
            <p>{postItem?.content}</p>
            {postItem?.comments.map((comment) => (
        <p key={comment.id}>{comment.content}</p>
      ))}
      <AddComment id={id} handleSubmit={handleSubmit}/>
            <Link to="/blog">Back</Link>
        </div>
    )
}
