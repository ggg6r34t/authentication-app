import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Card, Grid, Switch, Typography } from "@mui/material";

import Socials from "../../../socials/Socials";
import { StyledTextField } from "../sign-up/signupStyles";
import Separator from "../../../separator/Separator";
import styled from "styled-components";

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
  const [rememberMe, setRememberMe] = useState(false);
  const handleSetRememberMe = () => setRememberMe(!rememberMe);

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
                    // value={userInput.email}
                    // onChange={getEmail}
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
                    // value={userInput.password}
                    // onChange={getPassword}
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
                    component={Link}
                    to="/authentication/sign-in"
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
