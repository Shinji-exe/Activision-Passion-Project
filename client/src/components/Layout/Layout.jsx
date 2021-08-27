// import React from 'react'
// import {Link} from 'react-router-dom'

// export default function Layout(props) {
//     const { currentUser, handleLogout } = props;
//     return (
//         <header>
//         <h1>Activision</h1>
//       {currentUser ? (
//         <div>
//           <p>{currentUser.username}</p>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <Link to='/login'>Login/Register</Link>
//       )}
//       <hr />
//       {currentUser && (
//         <div>
//           <Link to='/foods'>Foods</Link>
//           <Link to='/flavors'>Flavors</Link>
//         </div>
//       )}
//       {props.children}
//     </header>
//     )
// }


import React from 'react'
import Navbar from '../Navbar/Navbar'

import "./Layout.css"

 const Layout = (props) => (
    <div>
    <Navbar className="navi" currentUser={props.currentUser} handleLogout={props.handleLogout}/>
    <div>{props.children}</div>
    </div>
    
 )

export default Layout