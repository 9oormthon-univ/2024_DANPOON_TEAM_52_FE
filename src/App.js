import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import {
  ROUTES_BASENAME,
  ROUTES_PATH_ROOT,
  ROUTES_PATH_HOME,
  ROUTES_PATH_LOGIN,
  ROUTES_PATH_SPLASH,
  ROUTES_PATH_INFO,
  ROUTES_PATH_ONBOARD
} from "./constants/routes"
import Login from "./pages/Login"
import Splash from "./pages/Splash"
import InfoPage from "./pages/Info"
import OnBoardingPage from "./pages/Onboarding"
export default function App() {
  return (
    <BrowserRouter basename={ROUTES_BASENAME}>
      <Routes>
        <Route path={ROUTES_PATH_LOGIN} element={<Login />} />
        <Route path={ROUTES_PATH_SPLASH} element={<Splash />} />
        <Route
          path={ROUTES_PATH_ROOT}
          element={<Navigate to={ROUTES_PATH_HOME} />}
        />
        <Route path={ROUTES_PATH_INFO} element={<InfoPage />}/>
        <Route path={ROUTES_PATH_ONBOARD} element={<OnBoardingPage />}/>
      </Routes>
    </BrowserRouter>
  )
}
