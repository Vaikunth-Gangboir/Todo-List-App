import { Navigate } from 'react-router-dom';
import { useFirebase } from '../Contexts/FirebaseContext';

function ProtectedRoute({ children }) {
  const { user } = useFirebase();

  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
}

export default ProtectedRoute;
 