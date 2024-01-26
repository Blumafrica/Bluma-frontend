import "./App.css";
import About from "./pages/About";
import Events from "./pages/Events";
import HomeOrLanding from "./pages/HomeOrLanding";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostView from "./pages/post/postView";
import Post from "./pages/post/post";
import LoginAndSignUp from "./pages/LoginAndSignUp";
import AdminLogin from "./pages/admin/AdminLogin";
import Login from "./pages/login";
import Error from "./pages/Error";
import LandingPage from "./pages/landinPage/LandingPage";

import Profile from "./pages/UserProfile/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeOrLanding />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/LoginAndSignUp" element={<LoginAndSignUp />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/events" element={<Events />} />
        <Route path="/PostView" element={<PostView/>}/>
        <Route path="/PostArticle" element={<Post/>}/>
        <Route path="/AdminLogin" element={<AdminLogin/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Error" element={<Error/>}/>
        <Route path="/LandingPage" element={<LandingPage/>}/>
        {/* <Route path="/LandingPage" element={<LandingPage/>}/> */}

        <Route path ="/UserProfile" element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
