import Login from "./Containers/Login/Login";
import Registration from "./Containers/Registration/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPassword from "./Containers/LoginPassword/LoginPassword";
import ResetPassword from "./Containers/ResetPassword/ResetPassword";
import LoginOtp from "./Containers/LoginOtp/LoginOtp";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/password/:email" element={<LoginPassword />} />
        <Route path="/otp/:mobileNo" element={<LoginOtp />} />
        <Route path="/forget-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
