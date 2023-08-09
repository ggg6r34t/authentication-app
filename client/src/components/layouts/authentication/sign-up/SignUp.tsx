import { Link } from "@mui/icons-material";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

import { Box, Button, Divider, Paper, Typography } from "@mui/material";

function SignUp() {
  return (
    <Paper>
      <Card>
        <Box p={3} mb={1} textAlign="center">
          <Typography variant="h5" fontWeight="medium">
            Register with
          </Typography>
        </Box>
        <Box mb={2}></Box>
        <Box px={12}>
          <Divider />
        </Box>
        <Box pt={2} pb={3} px={3}>
          <Box component="form" role="form">
            <Box mb={2}>
              <input placeholder="Name" />
            </Box>
            <Box mb={2}>
              <input type="email" placeholder="Email" />
            </Box>
            <Box mb={2}>
              <input type="password" placeholder="Password" />
            </Box>
            <Box display="flex" alignItems="center">
              <Checkbox defaultChecked />
              <Typography
                variant="button"
                fontWeight="regular"
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
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
            <Box mt={4} mb={1}>
              <Button fullWidth>sign up</Button>
            </Box>
            <Box mt={2}>
              <Typography variant="button" color="text" fontWeight="regular">
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
    </Paper>
  );
}

export default SignUp;
