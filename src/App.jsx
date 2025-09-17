import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import LandingPage from "./pages/Landing/LandingPage";
import DashBoard from './components/layout/DashBoard/DashBoard';
import LoginPage from './pages/Login/LoginPage';
import SignInPage from './pages/SignIn/SignInPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashBoard />}>
          <Route index element={<LandingPage />} />
          <Route path="auth">
            <Route path="login" element={<LoginPage />} />
            <Route path="signIn" element={<SignInPage />} />
          </Route>
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;