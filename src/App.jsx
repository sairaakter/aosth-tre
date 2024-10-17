import Layout from "./components/Layout";
import Homee from "./components/pages/Home";
import Login from "./components/pages/login";
import Quiz from "./components/pages/quiz";
import Result from "./components/pages/result";
import Signup from "./components/pages/signup";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles/App.css";

import { AuthProvider } from "./context/authcontext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Homee />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/quiz" element={<Quiz />}></Route>
            <Route path="/result" element={<Result />}></Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
