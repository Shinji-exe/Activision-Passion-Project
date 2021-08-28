import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function Posts(props) {
  const { posts, handleDelete, currentUser } = props;

  return (
    <div>
      {/* <h3>Posts</h3>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <p>{post.title}</p>
            <img>{post.imgURL}</img>
            <p>{post.content}</p>
          </Link>
          {currentUser?.id === post.user_id && (
            <div>
              <Link to={`/posts/${post.id}/post-edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
      <Link to='/posts/new'>
        <button>Create</button>
      </Link> */}
    </div>
  );
}

{/* <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  ); */}