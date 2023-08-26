import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  Grid,
  LinearProgress,
  Switch,
  Typography,
} from "@mui/material";

import { StyledTextField } from "../sign-up/signupStyles";
import { userActions } from "../../../../redux/slices/user";
import { User } from "../../../../type/types";
import { BASE_URL } from "../../../../api/api";
import Socials from "../../../socials/Socials";
import Separator from "../../../separator/Separator";
import { RootState } from "../../../../redux/store";

const StyledSwitch = styled(Switch)`
  & .MuiSwitch-thumb {
    color: #01e95e;
  }
  &
    .css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked
    + .MuiSwitch-track {
    background-color: #01e45c !important;
    opacity: 0.5;
  }

  & .css-1nr2wod.Mui-checked + .MuiSwitch-track {
    background-color: #01e45c !important;
    opacity: 0.5;
  }

  & .css-1yjjitx-MuiSwitch-track {
    height: unset !important;
    border: 1px solid #01e45c !important;
    opacity: 0.38 !important;
  }

  & .css-1ju1kxc {
    height: unset !important;
    border: 1px solid #01e45c !important;
    opacity: 0.38 !important;
  }
`;
function SignIn() {
  const isLogin = useSelector((state: RootState) => state.users.isLogin);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // get user email from form
  function getEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setUserInput({ ...userInput, email: e.target.value });
  }

  // get user password from form
  function getPassword(e: React.ChangeEvent<HTMLInputElement>) {
    setUserInput({ ...userInput, password: e.target.value });
  }

  const handleProgressUpdate = () => {
    const randomDelay = Math.floor(Math.random() * 3500) + 1000;
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          navigate("/account");
          setIsLoading(false);
          dispatch(userActions.userLogin(true));
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, randomDelay);

    return () => {
      setIsLoading(false);
      clearInterval(timer);
    };
  };

  function sendUserInformation() {
    setIsLoading(true);

    // send an AJAX request to the backend API endpoint
    let startTime = Date.now();

    axios
      .post(`${BASE_URL}/account/login`, userInput)
      .then((res) => {
        if (res.status === 200) {
          // store the userData and userToken securely (e.g., in local storage or cookie)
          const user = res.data.userData;
          const userToken = res.data.token;

          // save userData to redux
          const userWithData: User = {
            ...user,
            token: userToken,
          };
          dispatch(userActions.setUserData(userWithData));

          // set user login state
          dispatch(userActions.userLogin(true));

          // redirect to user account
          // navigate("/account");

          // calculation of the actual time taken for the backend to wake up
          const endTime = Date.now();
          const timeTaken = endTime - startTime;

          // calculation of the progress based on time taken and expected backend wake-up time
          // converting 7 minutes to milliseconds
          const expectedWakeUpTime = 7 * 60 * 1000;
          const calculatedProgress = (timeTaken / expectedWakeUpTime) * 100;

          // ensure progress is within the range of 0 to 100
          const progressValue = Math.min(Math.max(calculatedProgress, 0), 100);
          setProgress(progressValue);
          handleProgressUpdate();
        }
      })
      .catch((err) => {
        // handle login error
        setIsLoading(false);
        console.error(err);
      });

    // clear form
    setUserInput({
      email: "",
      password: "",
    });
  }

  const handleSumbit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendUserInformation();
  };

  if (isLoading) {
    return (
      <Box sx={{ margin: "0 auto" }}>
        <Grid
          container
          display="flex"
          flexDirection="column"
          justifyContent="center"
          sx={{ width: "100%" }}
        >
          <Card
            sx={{
              height: 131,
              width: 330,
              backgroundColor: "#080518",
              border: "1px solid #01e95e",
              borderTopWidth: "32px",
            }}
          >
            <Box p={3} pb={0} textAlign="center">
              <Typography variant="h5" color="#01e95e" fontWeight="medium">
                LOADING...
              </Typography>
            </Box>
            <Box p={2}>
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                  width: "291px",
                  height: "26px",
                  backgroundColor: "#080518",
                  border: "2px solid #01e95e",
                  "& .css-5xe99f-MuiLinearProgress-bar1": {
                    backgroundColor: "#01e95e",
                  },
                  "& .css-t752vm": {
                    backgroundColor: "#01e95e",
                  },
                }}
              />
            </Box>
          </Card>
          {isLogin && (
            <Box mt={2} className="alert">
              <Typography color="#01e95e" fontSize="14px" fontWeight="medium">
                Alert: Free tier backend waking up!
              </Typography>
            </Box>
          )}
        </Grid>
      </Box>
    );
  }

  return (
    <Box sx={{ margin: "0 auto" }}>
      <Grid
        container
        display="flex"
        justifyContent="center"
        sx={{ width: "100%" }}
      >
        <Card sx={{ backgroundColor: "#080518", border: "1px solid #01e95e" }}>
          <Box p={3} mb={1} textAlign="center">
            <Typography variant="h5" color="#01e95e" fontWeight="medium">
              Sign in
            </Typography>
          </Box>
          <Box mb={2}>
            <Socials />
          </Box>
          <Box mb={4}>
            <Box p={1} mb={1} textAlign="center">
              <Typography
                variant="button"
                color="#01e95e"
                fontWeight="medium"
                textTransform="none"
              >
                Or sign in with credentials
              </Typography>
            </Box>
            <Box
              px={3}
              sx={{
                padding: "16px 24px 24px",
              }}
            >
              <Box
                component="form"
                role="form"
                noValidate
                autoComplete="off"
                onSubmit={handleSumbit}
                sx={{
                  width: "428px",
                  height: "344px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <StyledTextField
                    component="div"
                    id="email"
                    name="email"
                    label="email"
                    margin="normal"
                    type="email"
                    variant="outlined"
                    required
                    value={userInput.email}
                    onChange={getEmail}
                  />

                  <StyledTextField
                    component="div"
                    id="password"
                    name="password"
                    label="password"
                    margin="normal"
                    type="password"
                    variant="outlined"
                    required
                    value={userInput.password}
                    onChange={getPassword}
                  />
                </Box>
                <Box
                  maxWidth="399px"
                  display="flex"
                  alignItems="center"
                  ml={2}
                  mb={4}
                >
                  <StyledSwitch
                    checked={rememberMe}
                    onChange={handleSetRememberMe}
                  />
                  <Typography
                    variant="button"
                    color="#01e95e"
                    fontWeight="regular"
                    textTransform="none"
                    onClick={handleSetRememberMe}
                    sx={{ cursor: "pointer", userSelect: "none" }}
                  >
                    &nbsp;&nbsp;Remember me
                  </Typography>
                </Box>
                <Box
                  sx={{
                    minWidth: "399px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Button
                    fullWidth
                    type="submit"
                    sx={{
                      width: "399px",
                      color: "#080518",
                      backgroundColor: "#01e95e",

                      "&:hover": {
                        backgroundColor: "#01e95e",
                      },
                    }}
                  >
                    Sign In
                  </Button>
                </Box>
                <Box px={12} sx={{ padding: "0 96px", margin: "24px" }}>
                  <Separator />
                </Box>
                <Box
                  mb={1}
                  sx={{
                    minWidth: "399px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Button
                    fullWidth
                    component={Link}
                    to="/authentication/sign-up"
                    sx={{
                      width: "399px",
                      color: "#080518",
                      backgroundColor: "#01e95e",

                      "&:hover": {
                        backgroundColor: "#01e95e",
                      },
                    }}
                  >
                    Sign Up
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Box>
  );
}
export default SignIn;
