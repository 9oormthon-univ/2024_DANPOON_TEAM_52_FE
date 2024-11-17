import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import {
  ROUTES_BASENAME,
  ROUTES_PATH_ROOT,
  ROUTES_PATH_HOME,
} from "./constants/routes";

export default function App() {
  return (
    <BrowserRouter basename={ROUTES_BASENAME}>
      <Routes>
        <Route
          path={ROUTES_PATH_ROOT}
          element={<Navigate to={ROUTES_PATH_HOME} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
