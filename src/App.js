import { Route, Routes } from "react-router-dom";
import DashBoard from "./components/layout/DashBoard";
import SignInPage from "./pages/Auth/SignInPage";
import LoginPage from "./pages/Auth/LoginPage";
import LandingPage from "./pages/Home/LandingPage";

function App() {
  return (
    <Routes>
      <Route element={<DashBoard />}>
        <Route index element={<LandingPage />} />
        <Route path="auth">
          <Route path="signIn" element={<LoginPage />} />
          <Route path="signIn" element={<SignInPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
