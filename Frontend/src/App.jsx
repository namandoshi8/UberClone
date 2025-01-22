import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import UserLogin from "./pages/UserLogin";
import UserSignUp from "./pages/UserSignUp";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignUp from "./pages/CaptainSignUp";
import HomePage from "./pages/HomePage";
import UserProtectWrapper from "./pages/UserProtectWrapper";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="*" element={<Home />} /> */}
        <Route path="/" element={<Landing />} index />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignUp />} />
        <Route
          path="/home"
          element={
            <UserProtectWrapper>
              <HomePage />
            </UserProtectWrapper>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
