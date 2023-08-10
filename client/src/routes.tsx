import { Route, Routes } from "react-router-dom";

import SignIn from "./components/layouts/authentication/sign-in/SignIn";
import SignUp from "./components/layouts/authentication/sign-up/SignUp";

function routes() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/authentication/sign-in" element={<SignIn />} />
    </Routes>
  );
}

export default routes;
