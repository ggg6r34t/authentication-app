import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import { Box, Button, Grid, Typography } from "@mui/material";

import Socials from "../../../socials/Socials";
import Separator from "../../../separator/Separator";
import {
  StyledTextField,
  // Container,
  // CardContainer,
  // CenteredBox,
  // FormContainer,
  // CheckboxLabel,
  // SignUpButton,
  // SignInLink,
} from "./signupStyles";

function SignUp() {
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
                    // value={userInput.name}
                    // onChange={getname}
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
                  mb={6}
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
                </Box>
                <Box
                  mt={4}
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
                    sx={{
                      width: "399px",
                      color: "#080518",
                      backgroundColor: "#01e95e",

                      "&:hover": {
                        backgroundColor: "#01e95e",
                      },
                    }}
                  >
                    sign up
                  </Button>
                </Box>
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
    </Box>
  );
}

export default SignUp;
