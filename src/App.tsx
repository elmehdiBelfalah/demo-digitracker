import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./layout/Layout";
import AuthPage from "./modules/auth/AuthPage";
import ProfileDetails from "./modules/profile/ProfileDetails";

function App() {
  return (
    <Router>
      {/* <ProfileDetails/> */}
      {/* <Layout/> */}
        <Routes>
          <Route path="/*" element={<AuthPage />} />
          <Route path="*" element={<Navigate to="/auth" />} />
        </Routes>
    </Router>
  );
}

export default App;
