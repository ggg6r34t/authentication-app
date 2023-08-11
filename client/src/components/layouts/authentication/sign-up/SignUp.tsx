import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import { Box, Grid, Typography } from "@mui/material";

import Socials from "../../../socials/Socials";
import Separator from "../../../separator/Separator";
import {
  StyledTextField,
  Container,
  // CardContainer,
  // CenteredBox,
  CheckboxContainer,
  FormContainer,
  SignUpButton,
  // SignInLink,
  StyledButtonContainer,
} from "./signupStyles";

function SignUp() {
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
              <FormContainer component="form" role="form">
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
                  <SignUpButton>sign up</SignUpButton>
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
              </FormContainer>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Container>
  );
}

export default SignUp;
