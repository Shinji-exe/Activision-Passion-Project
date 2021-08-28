import React from 'react'
import "./Navbar.css"
import {NavLink} from 'react-router-dom'
//import {Layout} from "../Layout/Layout"

// const logout = handleLogout();


const authenticatedOptions = (logout)=>(
    <>
    <NavLink to="sign-out" onClick={e=>{
        e.preventDefault()
        logout()
    }}>Sign Out</NavLink>
    <NavLink to ="create-post">Create Post</NavLink>
    <NavLink to="create-comment">Create Comment</NavLink>
     <NavLink className="redacted" to="/blog">Blog</NavLink>
    </>
)

const unauthenticatedOptions = (
    <>
      <NavLink to="/sign-in">Sign In</NavLink>
      <NavLink to="/sign-up">Sign Up</NavLink>
      {/* <NavLink to="/news">News</NavLink> */}
    </>
  )

const alwaysOptions = (
    <>
<NavLink to="/trend">Trend</NavLink>
</>
)

export default function Navbar(props) {
    return (
        <nav >
        <div className = "navs">
            <NavLink className="Activision" to="/">Activision</NavLink>
            <div className = "links">
                {props.currentUser && <div> Soldier on,{props.currentUser.username}</div>}
                {alwaysOptions}
                {props.currentUser ? authenticatedOptions(props.handleLogout) : unauthenticatedOptions}
            </div>
        </div>
        </nav>
    )
}