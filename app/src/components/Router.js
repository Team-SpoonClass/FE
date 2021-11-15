import { BrowserRouter, Route, Routes } from "react-router-dom";

import ClassCreatePage from "pages/ClassCreatePage";
import ClassDetailPage from "pages/ClassDetailPage";
import ClassEditPage from "pages/ClassEditPage";
import LandingPage from "pages/LandingPage";
import MainPage from "pages/MainPage";
import SignInPage from "pages/SignInPage";
import SignUpPage from "pages/SignUpPage";

import routes from "routes";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<MainPage />} />
        <Route path={routes.landing} element={<LandingPage />} />
        <Route path={routes.signIn} element={<SignInPage />} />
        <Route path={routes.signUp} element={<SignUpPage />} />
        <Route path={routes.classCreate} element={<ClassCreatePage />} />
        <Route path={routes.classDetail} element={<ClassDetailPage />} />
        <Route path={routes.classEdit} element={<ClassEditPage />} />
        <Route>NotFound</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
