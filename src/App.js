import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ForgotPassword, Home, ResetPassword, Signin, Signup } from './Pages';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
