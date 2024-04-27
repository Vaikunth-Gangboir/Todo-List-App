// Component
import { useEffect, useState } from 'react';
import AppLayout from '../Component/AppLayout';
import { useFirebase } from '../Contexts/FirebaseContext';

function Dashboard() {
  const [list, setList] = useState([]);
  const { findUserinDB, getTodos } = useFirebase();

  useEffect(() => {
    setList([]);
    findUserinDB();
    getList();
  }, []);

  async function getList() {
    const data = await getTodos();
    setList(
      data.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      }),
    );
  }

  return (
    <>
      <AppLayout list={list} getList={getList} />
    </>
  );
}

export default Dashboard;
