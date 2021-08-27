import React from 'react'
import {Link} from "react-router-dom"
import {useState} from "react"
import "./SignIn.css"
export default function Login(props) {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

   const {handleLogin} = props

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

     const handleSubmit = (e)=> {
      e.preventDefault()
      handleLogin(formData)
     }

    return (
      <div className="back">
        <form onSubmit={handleSubmit}>
          <div className = "lo">
            <h1>Activision|Blizzard</h1>
            </div>
            <h3>Login</h3>
            <label>
                username:
                <input type="text" name="username" value={formData.username} onChange={handleChange}/>
            </label>
            <br/>
            <label>
                password:
                <input type="password" name="password" value={formData.password} onChange={handleChange}/>
            </label>
            <br/>
                <Link to="/sign-up">Register</Link>
                <button>Submit</button>
        </form>
        </div>
    )
}
