import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { createPost, updatePost } from "../../actions/posts";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import Final from "./Final";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    name: "",
    dob: "",
    location: "",
    team: "",
    gender: "",
    sports: "",
    about: "",
    interests: "",
    profileimg: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({
      name: "",
      dob: "",
      location: "",
      team: "",
      gender: "",
      sports: "",
      about: "",
      interests: "",
      profileimg: "",
    });
  };

  const handleSubmit = async () => {
    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };
  const [step, setstep] = useState(1);
  const nextStep = () => {
    setstep(step + 1);
  };

  const prevStep = () => {
    setstep(step - 1);
  };

  switch (step) {
    case 1:
      return (
        <div className="App">
          <div className="col">
            <div className="row">
              <div md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepOne
                  nextStep={nextStep}
                  postData={postData}
                  setPostData={setPostData}
                  clear={clear}
                />
              </div>
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="App">
          <div className="col">
            <div className="row">
              <div md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepTwo
                  nextStep={nextStep}
                  postData={postData}
                  setPostData={setPostData}
                  prevStep={prevStep}
                  clear={clear}
                />
              </div>
            </div>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="App">
          <div className="col">
            <div className="row">
              <div md={{ span: 6, offset: 3 }} className="custom-margin">
                <Final
                  postData={postData}
                  setPostData={setPostData}
                  prevStep={prevStep}
                  handleSubmit={handleSubmit}
                  clear={clear}
                />
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return <div className="App"></div>;
  }
};

export default Form;
