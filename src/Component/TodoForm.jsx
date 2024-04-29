import { useState } from 'react';
//Context
import { useFirebase } from '../Contexts/FirebaseContext';
import { useTodoList } from '../Contexts/TodoContext';

function TodoForm() {
  const [title, setTitle] = useState('');
  const [discription, setDiscription] = useState('');
  const { addTodos } = useFirebase();
  const { getList } = useTodoList();

  const handleAdd = async function (e) {
    e.preventDefault();
    await addTodos({
      title,
      discription,
      completed: false,
      favourite: false,
      deleted: false,
    });

    setTitle('');
    setDiscription('');
    getList();
  };

  return (
    <div className="mb-8 flex justify-center p-2  lg:mb-0 lg:h-full lg:-translate-y-[10%] lg:items-center lg:pr-12 ">
      {/* Vertical Line in Center */}
      <div className="">
        {/* className="mx-auto flex max-w-xl  items-start justify-center gap-6 lg:grid lg:place-content-center" */}
        {/* Heading */}
        <h1 className="mb-6 hidden text-center text-4xl font-bold uppercase tracking-tight lg:block">
          Todo
        </h1>
        <p className="mb-6  hidden  text-justify text-base lg:block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. eos Ea Ea est
          corrupti quisquam non, expedita unde accusamus cupiditate voluptas
          nemo? Dolor at quia labore mollitia iure ducimus impedit delectus iste
          . expedita unde accusamus cupiditate eos voluptas nemo? at impedit.
        </p>
        {/* Todo Input Form */}
        <form
          className="grid w-64 justify-items-center gap-6 md:w-96  lg:w-full "
          onSubmit={handleAdd}
        >
          <input
            type="text"
            placeholder="Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-[100%] rounded-sm border-[1px] border-gray-300 bg-transparent px-4 py-2 font-medium outline-none placeholder:font-medium placeholder:text-black focus:shadow-md lg:w-[80%]"
          />
          <input
            type="text"
            placeholder="Discription"
            required
            value={discription}
            onChange={(e) => setDiscription(e.target.value)}
            className="mb-3 w-[100%] rounded-sm border-[1px] border-gray-300 bg-transparent px-4 py-2 font-medium outline-none placeholder:font-medium placeholder:text-black focus:shadow-md lg:w-[80%]"
          />
          <input
            type="submit"
            value="Add"
            className="w-[90%] justify-self-center bg-blue-600 px-4 py-2 font-medium text-white outline-none hover:bg-blue-800 focus:shadow-lg lg:w-[70%]"
          />
        </form>
      </div>
    </div>
  );
}

export default TodoForm;
