
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Progress from './pages/Progress';
import YourAvatar from './pages/YourAvatar';
import Socialfly from './pages/Socialfly';
import Leaderboard from './pages/Leaderboard';
import Home from './pages/Home';
import Default from './pages/Default';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Default/>} />
        <Route path='/home'  element={<Home/>} />
        <Route path='/yourAvatar' element={<YourAvatar/>} />
        <Route path='/progress' element={<Progress/>} />
        <Route path='/leaderboard' element={<Leaderboard/>} />
        <Route path='/socialfly' element={<Socialfly/>} />
      </Routes>
   </Router>

  );
}

export default App;
