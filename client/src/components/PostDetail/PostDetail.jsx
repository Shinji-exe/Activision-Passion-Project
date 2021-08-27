import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
// import {getOnePost} from '../../components/PostDetail/PostDetail'
import {getOnePost} from "../../services/posts"
import {addCommentToPost} from "../../services/comments"

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

    const handleChange = (e) => {
        const {value} = e.target;
        setSelectedComment(value);
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    const postItem = await addCommentToPost(id, selectedComment);
    setPostItem(postItem);
    };


    return (
        <div>
            <h3>{postItem?.title}</h3>
            {postItem?.comments.map((comment) => (
        <p key={comment.id}>{comment.content}</p>
      ))}
            <form onSubmit={handleSubmit}>
                <select onChange={handleChange} defaultValue='default'>
                    <option disabled value="default">

                    </option>
                    {comments.map((comment)=>(
                        <option value={comment.id}>{comment.content}</option>
                    ))}
                </select>
            </form>
        </div>
    )
}
