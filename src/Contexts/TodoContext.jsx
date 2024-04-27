import { createContext, useContext, useState } from 'react';
import { useFirebase } from './FirebaseContext';

const TodoContext = createContext('');

function TodoProvider({ children }) {
  const [list, setList] = useState([]);
  const { getTodos } = useFirebase();

  const handleSetList = (data) => {
    setList((list) => [...list, data]);
  };

  async function getList() {
    const data = await getTodos();
    setList(
      data.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      }),
    );
  }
  return (
    <TodoContext.Provider value={{ list, setList, getList, handleSetList }}>
      {children}
    </TodoContext.Provider>
  );
}

const useTodoList = () => {
  const context = useContext(TodoContext);
  if (context === undefined)
    throw new Error('Todo context was used outside the TodoProvider');
  return context;
};

export { TodoProvider, useTodoList };
