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
  ROUTES_PATH_MYPAGE,
  ROUTES_PATH_SETTING,
  ROUTES_PATH_CUSTOMGUIDE,
  ROUTES_PATH_RECOMMENDED_GOALS,
  ROUTES_PATH_GOAL,
  ROUTES_PATH_CALENDAR,
  ROUTES_PATH_GOAL_CONSTELLATION
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
import Goal from "./pages/Goal"
import GoalConstellation from "./pages/Goal/Constellation"
import CalendarPage from "./pages/Calendar"
import Mypage from "./pages/Mypage"
import SettingPage from "./pages/Mypage/SettingPage"
import CustomGuidePage from "./pages/Mypage/CustomGuide"
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
        <Route path={ROUTES_PATH_INFO} element={<InfoPage />}/>
        <Route path={ROUTES_PATH_ONBOARD} element={<OnBoardingPage />}/>
        <Route path={ROUTES_PATH_CALENDAR} element={<CalendarPage />}/>
        <Route path={ROUTES_PATH_MYPAGE} element={<Mypage />}/>
        <Route path={ROUTES_PATH_SETTING} element={<SettingPage />}/>
        <Route path={ROUTES_PATH_CUSTOMGUIDE} element={<CustomGuidePage />}/>
        <Route path={ROUTES_PATH_RECOMMENDED_GOALS} element={<RecommandedGoals />} />
        <Route path={`${ROUTES_PATH_GOAL}/:id`} element={<Goal />} />
        <Route path={`${ROUTES_PATH_GOAL_CONSTELLATION}/:id`} element={<GoalConstellation />} />
        <Route path={`${ROUTES_PATH_QUEST}/:id`} element={<Quest />} />
      </Routes>
    </BrowserRouter>
  )
}
