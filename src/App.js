import './App.css';
import HomePage from './pages/HomePage';
import SignUp from './pages/Signup';
import {BrowserRouter as  Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
      <Router>
        <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/Signup" element={<SignUp />}/>
        </Routes>
      </Router>
  );
}

export default App;
