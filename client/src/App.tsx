import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing/Landing';
import Signin from './pages/Signin/Signin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path='/'  element={<Landing /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
