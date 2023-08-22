// import axios from "axios";
// useDispatch,
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { Box, Card, Grid, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

import { RootState } from "../../../../redux/store";
// import { userActions } from "../../../../redux/slices/user";
// import { BASE_URL } from "../../../../api/api";

const StyledTextField = styled(TextField)`
  & .MuiInput-input {
    color: #01e95e;
    min-width: 65px;
    max-width: 100px;
    font-size: 24px;
    line-height: 1.334;
    font-weight: 500;
    text-transform: capitalize;
    margin-left: 8px;
  }
  & .MuiInput-root:before {
    border: none;
    border-color: transparent !important;
  }
  & .MuiInput-root:after {
    border: none;
    border-color: transparent !important;
  }
`;

function Profile() {
  const userDetail = useSelector(
    (state: RootState) => state.users.userInformation
  );

  const [formData, setFormData] = useState({
    name: userDetail?.name,
  });

  // const [readOnly, setReadOnly] = useState(true);

  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // function handleLogOut() {
  //   dispatch(userActions.logOut());
  //   navigate("/account/login");
  // }

  function setUserName(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, name: event.target.value });
  }

  // function onEditHandler() {
  //   setReadOnly(false);
  // }

  // function onDeleteHandler() {
  //   setReadOnly(false);
  //   setFormData({ name: "" });
  // }

  // function onSubmitHandler() {
  //   const token = userDetail?.token;
  //   const url = `${BASE_URL}/account/${userDetail?._id}`;

  //   axios
  //     .put(url, formData, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((res) => {
  //       dispatch(userActions.setUserData(res.data));
  //     })
  //     .catch((err) => {
  //       if (err.response.status === 401) {
  //         alert("Please log in to change your information.");
  //       }
  //       return;
  //     });
  //   setReadOnly(true);
  // }
  // if (!userDetail) {
  //   return <div> no data...</div>;
  // }

  return (
    <Box sx={{ margin: "0 auto" }}>
      <Grid container width="100%">
        <Card sx={{ backgroundColor: "#080518", border: "1px solid #01e95e" }}>
          <Box
            p={3}
            textAlign="center"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "1028px",
              height: "575px",
            }}
          >
            <Box component="div">
              <Stack direction="row">
                <Typography
                  variant="h5"
                  color="#01e95e"
                  fontWeight="medium"
                  marginTop="4px"
                >
                  You are logged in as:
                </Typography>
                <StyledTextField
                  id="standard-basic"
                  variant="standard"
                  value={formData.name}
                  onChange={setUserName}
                  InputProps={{ readOnly: true }}
                  // InputProps={{ readOnly: readOnly }}
                />
              </Stack>
            </Box>
            <Typography variant="h5" color="#01e95e" fontWeight="medium">
              Logged in at: 10:52
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Box>
  );
}

export default Profile;
