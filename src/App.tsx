import "./App.css";
import Login from "./modules/auth/components/Login";
import Registration from "./modules/auth/components/Registration";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ForgotPassword from "./modules/auth/components/ForgotPassword";
import SideBar from "./layout/SideBar";
import Header from "./layout/Header";
import AuthPage from "./modules/auth/AuthPage";

function App() {
  return (
    <Router>
      <SideBar/>
      {/* <Routes>
        <Route path="/*" element={<AuthPage />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes> */}
    </Router>
  );
}

export default App;
