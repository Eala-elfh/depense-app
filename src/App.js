import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './pictures/appLOGO.png';


import LoginForm from './components/form.js';
import NewPassword from './components/NewPassword.js';
import SignUp from './components/SignUp.js';
import Dashboard from './components/Dashboard.js';



function App() {
  return (
    <Router>
    <div className="App">
      <header> 
        <img src={logo} className='app-logo' alt='logo'/>
      </header>
      <main>
        <Routes>          
          <Route path='/' element={<LoginForm/>}/>
          <Route path='/forgot' element={<NewPassword/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </main>
    </div>
    </Router>
  );
}

export default App;
