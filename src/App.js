import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ForgotPassword, Home, Signin, Signup } from './Pages';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
