import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {NavLink} from "react-router-dom"
import "./Mobile.css"
const options = [
    <NavLink to="/trend">Trend</NavLink>

];

const authenticatedOptions = (logout)=>(
    [
    <NavLink to="sign-out" onClick={e=>{
        e.preventDefault()
        logout()
    }}>Sign Out</NavLink>,
    <NavLink to ="create-post">Create Post</NavLink>,
     <NavLink className="redacted" to="/blog">Blog</NavLink>
]
)

const unauthenticatedOptions = (
    [
      <NavLink to="/sign-in">Sign In</NavLink>,
      <NavLink to="/sign-up">Sign Up</NavLink>
    ]
  )

const ITEM_HEIGHT = 48;
export default function MobileMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <div className="button">
            <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {[...options,...(props.currentUser ? authenticatedOptions(props.handleLogout) : unauthenticatedOptions)].map((option,index) => (
          <MenuItem key={`nav${index}`} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
        </div>
    )
}
