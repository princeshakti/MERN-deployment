import React from "react";
import { TextField, Button, Paper } from "@material-ui/core";
import useStyles from "./styles";

const StepOne = ({ nextStep, postData, setPostData, clear }) => {
  const classes = useStyles();

  const submitFormData = async (e) => {
    e.preventDefault();
    console.log("next");

    nextStep();
  };

  return (
    <div>
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
        >
          <TextField
            name="name"
            variant="outlined"
            label="Name"
            fullWidth
            value={postData.name}
            onChange={(e) => setPostData({ ...postData, name: e.target.value })}
          />
          <TextField
            name="dob"
            variant="outlined"
            label="Date of Birth"
            fullWidth
            value={postData.dob}
            onChange={(e) => setPostData({ ...postData, dob: e.target.value })}
          />
          <TextField
            name="location"
            variant="outlined"
            label="Location"
            fullWidth
            value={postData.location}
            onChange={(e) =>
              setPostData({ ...postData, location: e.target.value })
            }
          />
          <TextField
            name="team"
            variant="outlined"
            label="Team"
            fullWidth
            value={postData.team}
            onChange={(e) => setPostData({ ...postData, team: e.target.value })}
          />
        </form>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="small"
            type="submit"
            onClick={submitFormData}
          >
            Continue
          </Button>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="secondary"
            size="small"
            type="submit"
            onClick={clear}
          >
            Clear
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default StepOne;
