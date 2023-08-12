import { Route, Routes } from "react-router-dom";

import SignIn from "./components/layouts/authentication/sign-in/SignIn";
import SignUp from "./components/layouts/authentication/sign-up/SignUp";

function routes() {
  return (
    <Routes>
      <Route path="/authentication/sign-in" element={<SignIn />} />
      <Route path="/authentication/sign-up" element={<SignUp />} />
      <Route path="*" element={<SignIn />} />
    </Routes>
  );
}

export default routes;
