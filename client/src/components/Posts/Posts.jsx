import { Link } from 'react-router-dom';


export default function Posts(props) {
  const { posts, handleDelete, currentUser } = props;

  return (
    <div>
      <h3>Posts</h3>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <p>{post.title}</p>
            <img>{post.imgURL}</img>
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
      <Link to='/posts/new'>
        <button>Create</button>
      </Link>
    </div>
  );
}