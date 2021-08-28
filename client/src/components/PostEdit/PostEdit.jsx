import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';

export default function PostEdit(props) {
    const [formData, setFormData] = useState({
        title: "",
        imgURL: "",
        content: "",
    })
    const {posts, handleUpdate} = props;
    const {id} = useParams();

    useEffect(()=> {
        const prefillFormData = () => {
            const postItem = posts.find((post)=> post.id === Number(id));
            setFormData({title: postItem.title, imgURL: postItem.imgURL, content: postItem.content})
        }
        if(posts.length){
            prefillFormData()
        }
    }, [posts, id])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(id, formData);
    }


    return (
        <div>
           
        <form onSubmit = {handleSubmit}>
            <label>
        Name:
        <input type='text' name='title' value={formData.title} onChange={handleChange}/>
      </label>
      <label>
        Image:
        <input type='text' name='imgURL' value={formData.imgURL} onChange={handleChange}/>
      </label>
      <label>
        Content:
        <input type='text' name='content' value={formData.content} onChange={handleChange}/>
      </label>
      <button>Submit</button>
        </form>
        </div>
    )
}
