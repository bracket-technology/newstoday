import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Article, PostRequest, ForgotPassword, Home, ManageUser, NewsDetails, PageNotFound, PostArticle, ProfilePage, ResetPassword, Signin, Signup, WriterRequest, CategoryPage } from './Pages';
import PrivateRoute from './route/PrivateRoute';
import AuthRoute from './route/AuthRoute';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<AuthRoute><Signup /></AuthRoute>} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/newsdetails/:categoryId" element={<NewsDetails />} />
        <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
        <Route path="/profile/post" element={<PrivateRoute><PostArticle /></PrivateRoute>} />
        <Route path="profile/users" element={<PrivateRoute><ManageUser /></PrivateRoute>} />
        <Route path="profile/postrequest" element={<PrivateRoute><PostRequest /></PrivateRoute>} />
        <Route path="profile/writer" element={<PrivateRoute><WriterRequest /></PrivateRoute>} />
        <Route path="/article/" element={<Article />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
