import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({ el }) {
  const classes = useStyles();

  return (
    <Link to={{ pathname: `/docprofile/${el._id}`, profileProps: { el: el } }}>
      <Card className='card-shadow'>
        <CardActionArea >
          <CardMedia
            className={classes.media}
            image="https://www.coth.fr/wp-content/uploads/2018/05/doctor_homme_coth.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {el.name} {el.lastName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {el.specialité}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              {el.email}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {el.ville}
            </Typography>
          </CardContent>
        </CardActionArea>
        
      </Card>
    </Link>
  );
}
