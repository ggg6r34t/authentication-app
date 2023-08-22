import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import { Box, Grid, Typography } from "@mui/material";

import {
  StyledTextField,
  Container,
  // CardContainer,
  // CenteredBox,
  CheckboxContainer,
  SignUpButton,
  // SignInLink,
  StyledButtonContainer,
} from "./signupStyles";
import Socials from "../../../socials/Socials";
import Separator from "../../../separator/Separator";
import { BASE_URL } from "../../../../api/api";

function SignUp() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // get user first name from form
  function getname(e: React.ChangeEvent<HTMLInputElement>) {
    setUserInput({ ...userInput, name: e.target.value });
  }

  // get user email from form
  function getEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setUserInput({ ...userInput, email: e.target.value });
  }

  // get user password from form
  function getPassword(e: React.ChangeEvent<HTMLInputElement>) {
    setUserInput({ ...userInput, password: e.target.value });
  }

  function sendUserInformation() {
    // send an AJAX request to the backend API endpoint
    axios
      .post(`${BASE_URL}/account/register`, userInput)
      .then((res) => {
        // handle successful login
        const token = res.data.token;

        // store the toekn securely (e.g., in local storage or cookie)
        localStorage.setItem("token", token);

        // redirect to user account
        navigate("/");
      })
      .catch((err) => {
        // handle login error
        console.error(err);
      });

    // clear form
    setUserInput({
      name: "",
      email: "",
      password: "",
    });
  }

  const handleSumbit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendUserInformation();
  };

  return (
    <Container>
      <Grid
        container
        display="flex"
        justifyContent="center"
        sx={{ width: "100%" }}
      >
        <Card sx={{ backgroundColor: "#080518", border: "1px solid #01e95e" }}>
          <Box p={3} mb={1} textAlign="center">
            <Typography variant="h5" color="#01e95e" fontWeight="medium">
              Register with
            </Typography>
          </Box>
          <Box mb={3}>
            <Socials />
          </Box>
          <Box px={12} sx={{ padding: "0 96px" }}>
            <Separator />
          </Box>
          <Box mb={4}>
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
                    id="name"
                    name="name"
                    label="name"
                    margin="normal"
                    type="name"
                    variant="outlined"
                    required
                    value={userInput.name}
                    onChange={getname}
                  />

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

                <CheckboxContainer
                // maxWidth="399px"
                // display="flex"
                // alignItems="center"
                // ml={2}
                // mb={6}
                >
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "#01e95e",
                      padding: "0",
                      "&.MuiButtonBase-root": {
                        color: "#01e95e",
                      },
                    }}
                  />
                  <Typography
                    variant="button"
                    color="#01e95e"
                    fontWeight="regular"
                    textTransform="none"
                    sx={{ cursor: "pointer", userSelect: "none" }}
                  >
                    &nbsp;&nbsp;I agree to the&nbsp;
                  </Typography>
                  <Typography
                    component="a"
                    href="#"
                    variant="button"
                    fontWeight="bold"
                  >
                    Terms and Conditions
                  </Typography>
                </CheckboxContainer>
                <StyledButtonContainer>
                  <SignUpButton type="submit">sign up</SignUpButton>
                </StyledButtonContainer>
                <Box mt={2} ml={2} maxWidth="399px">
                  <Typography
                    variant="button"
                    color="#01e95e"
                    fontWeight="regular"
                  >
                    Already have an account?&nbsp;
                    <Link
                      to="/authentication/sign-in"
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        component="span"
                        color="#01e95e"
                        fontWeight="bold"
                      >
                        Sign in
                      </Typography>
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Container>
  );
}

export default SignUp;
