import React, { useState,useEffect } from "react";
import { TextField, Button, Typography, Paper, Grid } from "@material-ui/core";
import useStyles from "./styles";
import Messages from '../../massages';



const Form = () => {
  const [messageData, setMessageData] = useState({ text:''});
  const [deleteAble,setDeleteAble]=useState(false);



  const classes = useStyles();
  const clear = () => {
    setMessageData({ text:''});
  };
  const sendMessage=()=>{
      Messages.addMessge(messageData);
      clear();
  }
  useEffect(() => {
    console.log("waiting deleteAble",deleteAble);
    deleteAbleUpdate();
  }, [deleteAble]);

  const deleteAbleUpdate = async () => {
    let newValue = await Messages.getAbleToDelete();
    console.log("newValue",newValue)
    setDeleteAble(newValue);
  };
  const deletLastMessage=()=>{
    Messages.deleteMessage();
    clear();
}


  return (
    <Paper className={classes.paper}>
      <Typography variant="h4" align="center">Welcome</Typography>
      <TextField name="text" variant="outlined" label="Message" fullWidth multiline  value={messageData.text} onChange={(e) => setMessageData({ text: e.target.value })} />
      <Grid className={classes.container} container alignItems="stretch" spacing={3} >
        <Grid item xs={12} sm={4}>
          <Button disabled={!(messageData.text)} className={classes.button} variant="contained" color="primary" size="large" onClick={sendMessage} fullWidth >
            Send
          </Button>
        </Grid>
        
        <Grid item xs={12} sm={7}>
          <Button disabled={!deleteAble} className={classes.button} variant="contained" color="secondary" size="small" onClick={deletLastMessage} fullWidth >
            Delete Last Message
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Form;
