// Hooks

// Component
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import PageNotFound from './Pages/PageNotFound';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

// Router
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Login />} />
      <Route
        path="Dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route index path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
