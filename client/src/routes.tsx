import { Route, Routes } from "react-router-dom";

import SignIn from "./components/layouts/authentication/sign-in/SignIn";
import SignUp from "./components/layouts/authentication/sign-up/SignUp";
import Profile from "./components/layouts/authentication/profile/Profile";

function routes() {
  return (
    <Routes>
      <Route path="/authentication/sign-in" element={<SignIn />} />
      <Route path="/authentication/sign-up" element={<SignUp />} />
      <Route path="/account" element={<Profile />} />
      <Route path="*" element={<SignIn />} />
    </Routes>
  );
}

export default routes;
