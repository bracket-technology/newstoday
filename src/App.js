import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Article, ForgotPassword, Home, ManageUser, NewsDetails, PageNotFound, PostArticle, ProfilePage, ResetPassword, Signin, Signup } from './Pages';
import PrivateRoute from './route/PrivateRoute';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/newsdetails" element={<NewsDetails />} />
        <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
        <Route path="/profile/post" element={<PostArticle />} />
        <Route path="profile/users" element={<ManageUser />} />
        <Route path="/article" element={<Article />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
