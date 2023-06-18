import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamePage from './pages/GamePage';
import RankingsPage from './pages/RankingsPage';
import NavBar from './components/NavBar';

function App() {
  return(
  <div>
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<GamePage/>}></Route>
        <Route path='/rankings' element={<RankingsPage/>}></Route>
        <Route path='/credits' element={<GamePage/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;
