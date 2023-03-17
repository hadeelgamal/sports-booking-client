import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/signup" element={<SignupPage />}></Route>
     </Routes>
    </div>
  );
}

export default App;
