import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { DarkModeProvider } from './context/DarkModeContext';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import ProtectedRoute from './components/UI/ProtectedRoute';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <AuthProvider>
        <DarkModeProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/posts/:id" element={<PostPage />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
              <Route path="/admin/create-post" element={<ProtectedRoute><CreatePost /></ProtectedRoute>} />
              <Route path="/admin/edit-post/:id" element={<ProtectedRoute><EditPost /></ProtectedRoute>} />
            </Routes>
          </Layout>
        </DarkModeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
