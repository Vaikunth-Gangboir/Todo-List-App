//Component
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Header from './Header';

function AppLayout() {
  return (
    <div className=" w-screen  px-6  py-4 lg:h-screen lg:overflow-hidden lg:p-12">
      <Header />
      <div className="grid grid-cols-1 lg:relative lg:h-full lg:grid-cols-2 lg:items-center lg:justify-center">
        <div className="absolute left-2/4 top-[40%] hidden h-[100%] w-[1px] -translate-y-2/4 bg-gray-400 lg:block"></div>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default AppLayout;
