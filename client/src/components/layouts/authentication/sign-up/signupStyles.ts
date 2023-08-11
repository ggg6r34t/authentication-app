import { Link } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledTextField = styled(TextField)`
  & .MuiFormLabel-root {
    color: #01e95e;
    top: -10px;
    font-size: 15px;
  }

  & .MuiInputLabel-root {
    color: #01e95e !important;
  }

  & .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    top: 0;
  }

  & .css-1ald77x.Mui-focused {
    top: 0;
  }

  & .MuiInputBase-root {
    color: #080518;
    width: 399px;
    height: 40px;
  }

  & .MuiInputBase-input {
    color: #01e95e;
    font-size: 16px;
    padding: 0;
    margin-left: 8px;
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

  //   @media (max-width: 1200px) {
  //     // Laptop breakpoint
  //     width: 350px;
  //   }

  //   @media (max-width: 768px) {
  //     // Tablet breakpoint
  //     width: 80%; // Adjust as needed
  //   }

  //   @media (max-width: 480px) {
  //     // Mobile breakpoint
  //     width: 100%; // Full width
  //   }
`;

export const Container = styled(Box)`
  margin: 0 auto;
`;

export const CardContainer = styled(Box)`
  background-color: #080518;
  border: 1px solid #01e95e;
`;

export const CenteredBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled(Box)`
  width: 428px;
  height: 344px;

  @media (max-width: 768px) {
    // Tablet breakpoint
    width: 80%;
  }

  @media (max-width: 480px) {
    // Mobile breakpoint
    width: 100%; // Full width
  }
`;

export const CheckboxLabel = styled(Typography)`
  // ... styling rules here ...
`;

export const SignUpButton = styled(Button)`
  // ... styling rules here ...

  @media (max-width: 480px) {
    // Mobile breakpoint
    width: 100%; // Full width
  }
`;

export const SignInLink = styled(Link)`
  // ... styling rules here ...
`;
