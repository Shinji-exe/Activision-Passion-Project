import React from 'react'
import {Link} from 'react-router-dom'
export default function Blog(props) {
    const {posts, handleDelete, currentUser} = props
    return (
        <div>
            <h3>Posts</h3>
            <p>Here's your intel</p>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <p>{post.title}</p>
            <img src={post.imgURL}/>
            <p>{post.content}</p>
          </Link>
          {currentUser?.id === post.user_id && (
            <div>
              <Link to={`/posts/${post.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
      <Link to='/create-post'>
        <button>Create a Post</button>
      </Link>
        </div>
    )
}
