// Component
import { useEffect } from 'react';
import AppLayout from '../Component/AppLayout';
import { useFirebase } from '../Contexts/FirebaseContext';
import { useTodoList } from '../Contexts/TodoContext';

function Dashboard() {
  const { findUserinDB } = useFirebase();
  const { getList } = useTodoList();

  useEffect(() => {
    findUserinDB();
    getList();
  }, []);

  return (
    <>
      <AppLayout />
    </>
  );
}

export default Dashboard;
