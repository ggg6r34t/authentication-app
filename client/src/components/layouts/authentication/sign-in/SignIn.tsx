import { useState } from "react";
import { Link } from "@mui/icons-material";
import { Box, Button, Paper, Switch, Typography } from "@mui/material";

import Socials from "../../../socials/Socials";

function SignIn() {
  const [rememberMe, setRememberMe] = useState(false);
  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <Box sx={{ marginRight: "auto", marginLeft: "auto" }}>
      <Box p={3} mb={1} textAlign="center">
        <Typography variant="h5" fontWeight="medium">
          Sign in
        </Typography>
      </Box>
      <Box mb={2}>
        <Socials />
      </Box>
      <Box p={3} mb={1} textAlign="center">
        <Typography variant="h5" fontWeight="medium">
          Or sign in with credentials
        </Typography>
      </Box>
      <Box component="form" role="form">
        <Box mb={2}>
          <input type="email" placeholder="Email" />
        </Box>
        <Box mb={2}>
          <input type="password" placeholder="Password" />
        </Box>
        <Box display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <Typography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </Typography>
        </Box>
        <Box mt={4} mb={1}>
          <Button color="info" size="large" fullWidth>
            Sign In
          </Button>
        </Box>
        <Box mt={3} textAlign="center">
          <Typography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <Typography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
            >
              Sign up
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default SignIn;
