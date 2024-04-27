//Hooks
import { useState } from 'react';

//Component
import TodoItem from './TodoItem';

//Icons
import { IoSearch } from 'react-icons/io5';
import { useTodoList } from '../Contexts/TodoContext';

function TodoList() {
  //Hooks
  const { list } = useTodoList();
  const [selected, setSelected] = useState('');
  const [query, setQuery] = useState('');

  //Searched List Derived State
  const searchedList = list.filter((item) => {
    if (query === '') {
      return item;
    } else if (
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.discription.toLowerCase().includes(query.toLowerCase())
    ) {
      return item;
    }
  });

  // Filtered List Derived State
  const filteredList = searchedList.filter((item) => {
    if (selected === '') {
      return item.title;
    } else if (selected === 'completed') {
      return item.completed;
    } else if (selected === 'delete') {
      return item.deleted;
    } else if (selected === 'favourite') {
      return item.favourite;
    }
  });

  // Logout Function

  return (
    <div className=" w-full p-2 lg:h-full lg:overflow-auto lg:pl-12">
      {/* Search and Filter */}
      <form className="mb-24 flex items-center justify-between lg:mt-10">
        <div className="relative w-[35%]">
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-sm border-[1px] border-gray-300 bg-transparent px-2 py-1 pr-10 outline-none placeholder:font-medium placeholder:text-black focus:shadow-sm"
          />
          <IoSearch
            size={24}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          />
        </div>
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="w-[35%] rounded-sm border-[1px] border-gray-300 bg-transparent px-2 py-1  outline-none placeholder:font-medium placeholder:text-black md:w-[20%] lg:w-[25%] xl:w-[20%]"
        >
          <option value="" defaultValue>
            Filter by
          </option>
          <option value="completed">Completed</option>
          <option value="favourite">Favourite</option>
          <option value="delete">Delete</option>
        </select>
      </form>

      {/* Todo List of Items */}
      <ul className=" w-full lg:h-[50%] ">
        {filteredList.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
