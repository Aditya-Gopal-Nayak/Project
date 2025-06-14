import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Login from './components/Login.jsx';
import Signup from './components/signup.jsx';
import Auth from "./auth.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/signup" />} />
        
        <Route path="/auth" element={<Auth />}>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
