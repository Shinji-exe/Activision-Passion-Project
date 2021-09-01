import React from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Blog.css"
import Footer from '../Footer/Footer';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 140,
  },
});

export default function Blog(props) {
  const classes = useStyles();

    const {posts, comments, handleDelete, currentUser} = props
    console.log("blog props",props)
    return (
        <div className = "line">
        <div className = "backends">
          
        </div>
            <h3>Posts</h3>
            <p>Here's your intel</p>
            
      {posts.map((post) => (
        <Card className={classes.root}>
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {/* <h3>{post.title}</h3> */}
            {/* <img src={post.imgURL}/> */}
            {/* <p>{post.content}</p> */}
            <CardMedia
          className={classes.media}
          image={post.imgURL}
          title="blog-image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {post.content}
          </Typography>
        </CardContent>
          </Link>
          </div>
           {currentUser?.id === post.user_id && (
            <div>
              <Link to={`/posts/${post.id}/edit`}>
                <button>Edit</button>
              </Link>
              <Link to={`/posts/${post.id}/comment`}>
                <button>Comment</button>
              </Link>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
            </div>
          )}
        {/* </div> */}
          </Card>

          // {currentUser?.id === post.user_id && (
          //   <div>
          //     <Link to={`/posts/${post.id}/edit`}>
          //       <button>Edit</button>
          //     </Link>
          //     <Link to={`/posts/${post.id}/comment`}>
          //       <button>Comment</button>
          //     </Link>
          //     <button onClick={() => handleDelete(post.id)}>Delete</button>
          //   </div>
          // )}
        // </div>
      ))}
      <Link to='/create-post'>
        <button>Create a Post</button>
      </Link>
     <Footer/>
        </div>
    )
}
