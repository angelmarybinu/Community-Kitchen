import './App.css';
import Home from './home/home'
//import Login from './pages/login/Login';
import {BrowserRouter,Routes,Route}from 'react-router-dom';
import Dashboard from './dashboard/dashboard';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
