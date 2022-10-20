import React from "react";
import { TextField, Button, Paper } from "@material-ui/core";

import useStyles from "./styles";

const StepOne = ({
  postData,
  setPostData,
  prevStep,
  currentId,
  handleSubmit,
}) => {
  const classes = useStyles();

  const submitFormData = (e) => {
    e.preventDefault();
    handleSubmit();
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
            name="about"
            variant="outlined"
            label="About"
            fullWidth
            multiline
            rows={4}
            value={postData.about}
            onChange={(e) =>
              setPostData({ ...postData, about: e.target.value })
            }
          />
          <TextField
            name="interests"
            variant="outlined"
            label="Interest"
            fullWidth
            value={postData.interests}
            onChange={(e) =>
              setPostData({ ...postData, interests: e.target.value })
            }
          />

          <TextField
            name="profileimg"
            variant="outlined"
            label="Profile Image"
            fullWidth
            value={postData.profileimg}
            onChange={(e) =>
              setPostData({ ...postData, profileimg: e.target.value })
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
            Submit
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default StepOne;
