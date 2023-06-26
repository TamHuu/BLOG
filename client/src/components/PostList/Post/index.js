import React from "react";
import moment from "moment";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
export default function Post({ post }) {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar>A</Avatar>}
        title={post.author}
        subheader={moment(post.updateAt).format("HH:MM MMM DD, YYYY")}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardMedia image="#" title="Title" />
      <CardContent>
        <Typography variant="h5" color="textPrimary">
          {post.title}
        </Typography>
        <Typography component="p" color="textSecondary" variant="body2">
          {post.content}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <FavoriteIcon />
          <Typography component="span" color="textSecondary">
            {post.likeCount}
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}
