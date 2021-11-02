import React, { useState, useEffect } from "react";
import Messages from "../../massages";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CircularProgress,
} from "@material-ui/core/";
import moment from "moment";
import useStyles from "./styles";

const Post = () => {
  const [message, setMessage] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    if (message === null) {
      next();
    }
  }, [message]);

  const next = async () => {
    let newMessage = await Messages.getMessage();
    console.log("newMessage",newMessage);
    setMessage(newMessage);
  };
  
  return !message ? (
    <CircularProgress />
  ) : (
    <Card className={classes.card}>
      <div className={classes.content}>
      <div className={classes.overlay}>
        <Typography variant="h6">Creation Time:</Typography>
        <Typography variant="body2">
          {moment(message.creationTime).format("MMMM Do YYYY, h:mm:ss a")}
        </Typography>

        <Typography variant="h6">Received Time:</Typography>
        <Typography variant="body2">
          {moment(message.receivedTime).format("MMMM Do YYYY, h:mm:ss a")}
        </Typography>
      </div>

      <Typography
        className={classes.details}
        variant="body2"
        color="textSecondary"
        component="p"
      >
        {message.text}
      </Typography>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        size="large"
        onClick={() => {
          setMessage(null);
        }}
        fullWidth
      >
        NEXT MESSAGE
      </Button>
      
      </div>
    </Card>
  );

};

export default Post;
