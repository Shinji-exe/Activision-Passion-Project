
import {useState} from "react"
import Footer from "../Footer/Footer"
import "./AddComment.css"
export default function AddComment(props) {
    const {id, handleSubmit} = props
    const [comment, setComment] = useState({
        content: "",
        post_id: id
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setComment((prevState) => ({
            ...prevState,
        [name]: value,
        }))
    }

    return (
        <div className = "fixit">
        <form className = "coms" onSubmit={(e)=>{
e.preventDefault();
handleSubmit(comment);
        }}>
            {/* <h2>Add a comment</h2> */}
            <input type="text" name="content" value={comment.content} onChange={handleChange}/>
            <button>Comment</button>
        </form>
        <Footer/>
        </div>
    )
}
