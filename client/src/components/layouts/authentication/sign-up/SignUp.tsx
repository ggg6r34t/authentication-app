import { Link } from "@mui/icons-material";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import styled from "styled-components";

import Socials from "../../../socials/Socials";
import Separator from "../../../separator/Separator";

const StyledTextField = styled(TextField)`
  & .MuiFormLabel-root {
    color: #01e95e;
  }
  & .MuiInputLabel-root {
    color: #01e95e !important;
  }

  & .MuiInputBase-root {
    color: #080518;
    width: 399px;
    height: 40px;
  }

  & .MuiOutlinedInput-notchedOutline {
    border: 1px solid;
    border-color: #01e95e !important;
    width: 385px;
    height: 40px;
  }

  & .Mui-focused fieldset {
    border-color: #01e95e !important;
  }
`;

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
          <Box mb={2}>
            <Socials />
          </Box>
          <Box px={12} sx={{ padding: "0 96px" }}>
            <Separator />
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
                  fullWidth
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
                  fullWidth
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
                  fullWidth
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
              <Box maxWidth="399px" display="flex" alignItems="center">
                <Checkbox defaultChecked />
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
              <Box mt={2} maxWidth="399px">
                <Typography
                  variant="button"
                  color="#01e95e"
                  fontWeight="regular"
                >
                  Already have an account?&nbsp;
                  <Typography
                    component={Link}
                    to="/authentication/sign-in"
                    variant="button"
                    color="dark"
                    fontWeight="bold"
                  >
                    Sign in
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Box>
  );
}

export default SignUp;
