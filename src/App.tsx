import Login from "./Containers/Login/Login";
import Registration from "./Containers/Registration/Registration";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import your route componen
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoginPassword from "./Containers/LoginPassword/LoginPassword";
import ResetPassword from "./Containers/ResetPassword/ResetPassword";
import LoginOtp from "./Containers/LoginOtp/LoginOtp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/password" element={<LoginPassword />} />
        <Route path="/otp" element={<LoginOtp />} />
        <Route path="/forget-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
