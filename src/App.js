import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import {
  ROUTES_BASENAME,
  ROUTES_PATH_ROOT,
  ROUTES_PATH_HOME,
  ROUTES_PATH_LOGIN,
  ROUTES_PATH_LOGIN_KAKAO,
  ROUTES_PATH_SPLASH,
  ROUTES_PATH_INFO,
  ROUTES_PATH_ONBOARD,
  ROUTES_PATH_RECOMMENDED_GOALS,
  ROUTES_PATH_QUEST,
  ROUTES_PATH_CALENDAR
} from "./constants/routes"
import { ApiClientSetting } from "./apis/apiClient"
import KakaoInit from "./components/KakaoInit"
import Login from "./pages/Login"
import Splash from "./pages/Splash"
import InfoPage from "./pages/Info"
import OnBoardingPage from "./pages/Onboarding"
import Home from "./pages/Home"
import RecommandedGoals from "./pages/RecommandedGoals"
import Kakao from "./pages/Login/Kakao"
import Quest from "./pages/Quest"
import CalendarPage from "./pages/Calendar"
export default function App() {
  return (
    <BrowserRouter basename={ROUTES_BASENAME}>
      <ApiClientSetting />
      <KakaoInit />
      <Routes>
        <Route path={ROUTES_PATH_LOGIN} element={<Login />} />
        <Route path={ROUTES_PATH_LOGIN_KAKAO} element={<Kakao />} />
        <Route path={ROUTES_PATH_SPLASH} element={<Splash />} />
        <Route path={ROUTES_PATH_HOME} element={<Home />} />
        <Route
          path={ROUTES_PATH_ROOT}
          element={<Navigate to={ROUTES_PATH_HOME} />}
        />
        <Route path={ROUTES_PATH_INFO} element={<InfoPage />} />
        <Route path={ROUTES_PATH_ONBOARD} element={<OnBoardingPage />} 
        <Route path={ROUTES_PATH_RECOMMENDED_GOALS} element={<RecommandedGoals />} />
        <Route path={ROUTES_PATH_CALENDAR} element={<CalendarPage />}/>
        <Route path={`${ROUTES_PATH_QUEST}/:id`} element={<Quest />} />
      </Routes>
    </BrowserRouter>
  )
}
