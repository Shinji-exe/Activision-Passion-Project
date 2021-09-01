import React from 'react'
import Footer from '../Footer/Footer'
import MobileMenu from '../MobileMenu/MobileMenu'

import Navbar from '../Navbar/Navbar'

import "./Layout.css"

 const Layout = (props) => (
    <div>
    <Navbar className="navi" currentUser={props.currentUser} handleLogout={props.handleLogout}/>
    <div>{props.children}</div>
    </div>
    
 )

export default Layout