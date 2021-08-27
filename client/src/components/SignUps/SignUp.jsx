import React from 'react'
import {Link} from "react-router-dom"
import {useState} from "react"
import "./SignUp.css"
export default function Signup(props) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: ""
    })

    const {handleRegister} = props

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleRegister(formData)
    }


    return (
        <div>
              <div>
      <div className = "contain">
      <section className ="wall">
        
      </section>

      <section className ="wall2">
        
      </section>

      <section className = "wall3">
       
      </section>

      </div>
    </div>
        <form onSubmit ={handleSubmit}>
            <h3>Register</h3>
            <label>
                username:
                <input type="text" name="username" value={formData.username} onChange={handleChange}/>
            </label>
            <br/>
            <label>
                email:
                <input type="text" name="email" value={formData.email} onChange={handleChange}/>
            </label>
            <br/>
            <label>
                password:
                <input type="password" name="password" value={formData.password} onChange={handleChange}/>
            </label>
            <br/>
                <Link to="/sign-in">Login</Link>
                <button>Submit</button>
        </form>
        </div>
    )
}
