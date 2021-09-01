import React from 'react'
import {useState} from 'react'
export default function CommentCreate(props) {
    const [formData, setFormData] = useState({
        content: "",
    });
    const {content} = formData;
    const {handleMake, currentUser} = props;
console.log("comment props",props)
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({
            ...prevState,
        [name]: value,
        }))
    }

    const handleSubmit = (e) => {
    e.preventDefault();
    handleMake(formData)
    }
    return (
        <form onSubmit = {() => handleSubmit(currentUser.id)}>
            <h3>Create Comment</h3>
            <label>
                Comment
                <input type="text" name="content" value={content} onChange={handleChange}/>
            </label>
            <button>Comment</button>
        </form>
    )
}
