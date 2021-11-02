import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Post from "./components/Post/Post";
import Form from "./components/Form/Form";
import useStyles from "./styles";
// import Messages from './massages';


const App = () => {
  const classes = useStyles();

 
  
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          MESSAGES
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} >
          <Grid item xs={12} sm={5}>
              <Form />
               {/* <Form currentId={currentId} setCurrentId={setCurrentId} /> */}
          </Grid>
          <Grid item xs={12} sm={6}>
              <Post />
          </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>

  );
};
export default App;
