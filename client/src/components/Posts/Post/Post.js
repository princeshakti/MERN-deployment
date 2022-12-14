import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";

import { deletePost } from "../../../actions/posts";
import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  console.log(post);

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.profileimg}
        title={post.name}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        Edit
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>

      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {post.name}
      </Typography>

      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="p">
          <strong>About:</strong> <br />
          {post.about}
        </Typography>
      </div>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <strong>Team: </strong>
          {post.team}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <strong>Location: </strong>
          {post.location}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <strong>Sports: </strong>
          {post.sports.map((tag) => `${tag}, `)}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <strong>Gender: </strong>
          {post.gender}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <strong>Interest: </strong>
          {post.interests}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <strong>DoB: </strong>
          {post.dob}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
