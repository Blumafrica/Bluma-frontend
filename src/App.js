import "./App.css";
import About from "./pages/About";
import Events from "./pages/Events";
import HomeOrLanding from "./pages/HomeOrLanding";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import SignUp from "./pages/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostView from "./pages/post/postView";
import Post from "./pages/post/post";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeOrLanding />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/events" element={<Events />} />
        <Route path="/PostView" element={<PostView/>}/>
        <Route path="/PostArticle" element={<Post/>}/>
      </Routes>
    </Router>
  );
}

export default App;
