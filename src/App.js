// import './App.css';
// import Dashboard from './components/Dashboard';

// function App() {
//   return (
//     <div className="App">
//       <Dashboard/>
//     </div>
//   );
// }
// export default App;

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import AuthGuard from './Auth/AuthGaurd';
import { AuthProvider } from './Auth/AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
  return (
<>
 <AuthProvider>
    <Router>
      <div >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route element={<AuthGuard/>} >
        <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>
      </div>
    </Router>
   </AuthProvider>
    </>
    );
  }
  
  export default App;
