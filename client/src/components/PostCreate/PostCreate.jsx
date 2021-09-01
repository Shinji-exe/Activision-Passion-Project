import React from 'react'
import {useState} from "react"
import Footer from '../Footer/Footer';
import "./PostCreate.css"
export default function PostCreate(props) {
    const [formData, setFormData] = useState({
        title: "",
        imgURL: "",
        content: ""
    });
    const {title,imgURL,content} = formData;
    const {handleCreate} = props
console.log(props)
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({
            ...prevState,
        [name]: value,
        }))
    }

    const handleSubmit = (e) => {
    e.preventDefault();
    handleCreate(formData)
    }
    return (
        <div>
            <div className = "backdrop"></div>
        <form className="forum" onSubmit = {handleSubmit}>
            <h3>Create Post</h3>
            <label>
                title
                <input type="text" name="title" value={title} onChange={handleChange}/>
                image
                <input type="text" name="imgURL" value={imgURL} onChange={handleChange}/>
                content
                <input type = "text" name="content" value={content} onChange={handleChange}/>
            </label>
            <button>Post</button>
        </form>
         <Footer/>
        </div>
    )
}