import { BrowserRouter, Route, Routes } from "react-router-dom";

import ClassCreatePage from "pages/ClassCreatePage";
import ClassDetailPage from "pages/ClassDetailPage";
import ClassEditPage from "pages/ClassEditPage";
import LandingPage from "pages/LandingPage";
import MainPage from "pages/MainPage";
import SignInPage from "pages/SignInPage";
import SignUpPage from "pages/SignUpPage";

import routes from "routes";
import Header from "components/Header";

function Router({ userObj, setUserObj }) {
  return (
    <BrowserRouter>
      <Header userObj={userObj} setUserObj={setUserObj} />
      <Routes>
        <Route path={routes.home} element={<MainPage userObj={userObj} />} />
        <Route
          path={routes.landing}
          element={<LandingPage userObj={userObj} />}
        />
        <Route
          path={routes.signIn}
          element={<SignInPage userObj={userObj} setUserObj={setUserObj} />}
        />
        <Route
          path={routes.signUp}
          element={<SignUpPage userObj={userObj} />}
        />
        <Route
          path={routes.classCreate}
          element={<ClassCreatePage userObj={userObj} />}
        />
        <Route
          path={routes.classDetail}
          element={<ClassDetailPage userObj={userObj} />}
        />
        <Route
          path={routes.classEdit}
          element={<ClassEditPage userObj={userObj} />}
        />
        <Route>NotFound</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
