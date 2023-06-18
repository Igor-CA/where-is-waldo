import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamePage from './pages/GamePage';
import RankingsPage from './pages/RankingsPage';
import NavBar from './components/NavBar';
import CreditsPage from './pages/CreditsPage';

function App() {
  return(
  <div className='App'>
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<GamePage/>}></Route>
        <Route path='/rankings' element={<RankingsPage/>}></Route>
        <Route path='/credits' element={<CreditsPage/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;
