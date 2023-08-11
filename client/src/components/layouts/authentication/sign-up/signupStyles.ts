import { Link } from "react-router-dom";
import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
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

  @media (max-width: 600px) {
    // Tablet breakpoint

    & .MuiInputBase-root {
      width: 200px;
    }

    & .MuiOutlinedInput-notchedOutline {
      width: 182px;
    }
  }
`;

export const Container = styled(Box)`
  margin: 0 auto;

  @media (max-width: 600px) {
    // Tablet breakpoint
    width: 80%;
  }
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

  @media (max-width: 600px) {
    // Tablet breakpoint
    width: 100%;
  }
`;

export const CheckboxContainer = styled(Box)`
  max-width: 399px;
  display: flex;
  align-items: center;
  margin-left: 16px;
  margin-bottom: 48px;

  @media (max-width: 600px) {
    // Tablet breakpoint
    margin-left: 0;
  }
`;

export const StyledCheckbox = styled(Checkbox)`
  color: #01e95e;
  padding: 0;

  &.MuiButtonBase-root {
    color: #01e95e;
  }
`;

export const StyledTypography1 = styled(Typography)`
  variant: button;
  color: #01e95e;
  font-weight: regular;
  text-transform: none;
  cursor: pointer;
  user-select: none;
`;

export const StyledTypography2 = styled(Typography)`
  component: a;
  href: "#";
  variant: button;
  font-weight: bold;
`;

export const StyledButtonContainer = styled(Box)`
  margin-top: 32px;
  margin-bottom: 8px;
  min-width: 399px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    width: 182px !important;
  }
`;

export const SignUpButton = styled(Button)`
  width: 399px;
  color: #080518 !important;
  background-color: #01e95e !important;

  &:hover {
    background-color: #01e95e !important;
  }
`;

export const SignInLink = styled(Link)`
  // ... styling rules here ...
`;
