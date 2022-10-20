import React, { useState, useEffect } from "react";
import { Container, Grid, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { getPosts } from "./actions/posts";
import useStyles from "./styles";

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <br />
      <Button
        className={classes.buttonSubmit}
        variant="contained"
        color="primary"
        size="small"
        type="submit"
        onClick={toggle}
      >
        Show Form
      </Button>
      <p></p>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>

          <Grid item xs={12} sm={4}>
            {show && <Form currentId={currentId} setCurrentId={setCurrentId} />}
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default App;
