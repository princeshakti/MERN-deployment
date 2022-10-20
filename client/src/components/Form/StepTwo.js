import React from "react";
import { TextField, Button, Paper } from "@material-ui/core";
import useStyles from "./styles";

const StepOne = ({ nextStep, postData, setPostData, prevStep }) => {
  const classes = useStyles();

  const submitFormData = (e) => {
    e.preventDefault();

    nextStep();
  };

  return (
    <div>
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={submitFormData}
        >
          <TextField
            name="gender"
            variant="outlined"
            label="Gender"
            fullWidth
            value={postData.gender}
            onChange={(e) =>
              setPostData({ ...postData, gender: e.target.value })
            }
          />
          <TextField
            name="sports"
            variant="outlined"
            label="Sports (coma seperated)"
            fullWidth
            value={postData.sports}
            onChange={(e) =>
              setPostData({
                ...postData,
                sports: e.target.value.split(","),
              })
            }
          />
        </form>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="small"
            type="submit"
            onClick={prevStep}
          >
            Previous
          </Button>
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
        </div>
      </Paper>
    </div>
  );
};

export default StepOne;
