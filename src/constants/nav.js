import {
  ROUTES_PATH_CALENDAR,
  ROUTES_PATH_GOAL_CONSTELLATION,
  ROUTES_PATH_HOME,
  ROUTES_PATH_MYPAGE,
  ROUTES_PATH_SEARCH
} from "./routes";

import { ReactComponent as HomeIcon } from "../svgs/Home.svg"
import { ReactComponent as CalendarIcon } from "../svgs/Calendar.svg"
import { ReactComponent as SearchIcon } from "../svgs/Search.svg"
import { ReactComponent as UserIcon } from "../svgs/User.svg"

export const NAVS = [
  {
    title: "홈",
    src: [ROUTES_PATH_HOME, ROUTES_PATH_GOAL_CONSTELLATION],
    icon: {
      default: <HomeIcon fill="transparent" stroke="#AAA" />,
      highlight: <HomeIcon fill="#FFF" stroke="#FFF" />
    }
  },
  {
    title: "캘린더",
    src: [ROUTES_PATH_CALENDAR],
    icon: {
      default: <CalendarIcon fill="transparent" stroke="#AAA" />,
      highlight: <CalendarIcon fill="#FFF" stroke="#FFF" />
    }
  },
  {
    title: "탐색",
    src: [ROUTES_PATH_SEARCH],
    icon: {
      default: <SearchIcon fill="transparent" stroke="#AAA" />,
      highlight: <SearchIcon fill="transparent" stroke="#FFF" />
    }
  },
  {
    title: "마이페이지",
    src: [ROUTES_PATH_MYPAGE],
    icon: {
      default: <UserIcon fill="transparent" stroke="#AAA" />,
      highlight: <UserIcon fill="#FFF" stroke="#FFF" />
    }
  }
]