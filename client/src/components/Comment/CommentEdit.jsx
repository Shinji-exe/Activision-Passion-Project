import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
export default function CommentEdit() {
    const [formData, setFormData] = useState({
        content: "",
    })
    const {comment, handleUpdate} = props;
    const {id} = useParams();

 useEffect(()=> {
     const prefillFormData = () => {
         const commentItem = comments.find((comment)=> comment.id === Number(id));
         setFormData({name: commentItem.content})
     }
     if(comment.length){
         prefillFormData()
     }
 }, [comments, id])

 const handleChange = (e) => {
     const {name, value} = e.target;
     setFormData(prevState => ({
         ...prevState,
         [name]: value
     }))
 }

 const handleSubmit = (e) => {
     e.preventDefault();
      handleUpdate(id, formData)
 }

    return (
        <form onSubmit = {handleSubmit}>
             <label>
        Comment Update:
        <input type='text' name='content' value={formData.content} onChange={handleChange}/>
      </label>
      <button>Update</button>
        </form>
    )
}
