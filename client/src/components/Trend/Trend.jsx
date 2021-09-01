import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Trend.css"
import Footer from '../Footer/Footer';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 160,
    },
  });

export default function Trend() {
    const classes = useStyles();
    return (
        <div className = "flex">
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.denofgeek.com/wp-content/uploads/2021/05/Overwatch.jpg?fit=1280%2C720"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            OverWatch 2
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            With fans asking about OverWatch 2 with its absence on GamesCon, Blizzard Entertainment regrets to inform to fan that the OverWatch has been cancelled 
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
    <Card className={classes.root}>
      <CardActionArea>
          <br/>
        <CardMedia
          className={classes.media}
          image="https://assets-prd.ignimgs.com/2021/08/25/callofdutyvanguard-blogroll-1629915850241.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Call of Duty: Vanguard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            With SledgeHammer Games showing off the newest installment to the COD franchise, fans have nothing but good remarks for the "Stalingrad" campaign 
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
      <br/>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn.mos.cms.futurecdn.net/T9SJhzPZyTSwFYWAg5HovL.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            GamesCon
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          If you missed Gamescon yesterday, not a problem. Check out the video with the coverage of our new installment in the COD franchise "Call of Duyt:Vanguard"
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
    <Footer/>
        </div>
    )
}
