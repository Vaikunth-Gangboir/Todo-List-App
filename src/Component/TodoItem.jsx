// Icons
import { FaHeart } from 'react-icons/fa6';
import { MdDoNotDisturb } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';
import { MdOutlineDeleteSweep } from 'react-icons/md';
import { useFirebase } from '../Contexts/FirebaseContext';

function TodoItem({ item, getList }) {
  const { updateTodos } = useFirebase();
  async function handleUpdate(action) {
    await updateTodos(item.id, { ...item, [action]: !item[action] })
      .then(() => {
        console.log('Document updated successfully!');
        getList();
      })
      .catch((error) => {
        console.error('Error updating document:', error);
      });
  }

  return (
    <>
      {/* Todo Items */}
      <li className="flex items-center justify-between rounded-sm border-b-[1px] border-gray-300 px-2 py-3 transition-all hover:bg-gray-200">
        <div className="w-[80%] overflow-x-hidden">
          {/* Title */}
          <h3
            className={`text-base font-bold ${item.deleted ? 'line-through' : ''}`}
          >
            {item.title}
          </h3>
          {/* Discription */}
          <p className={`text-sm ${item.deleted ? 'line-through' : ''}`}>
            {item.discription}
          </p>
        </div>
        {/* Action buttons */}
        <div className={`flex items-center justify-center gap-3`}>
          <TiTick
            size={24}
            className={`${item.completed ? 'text-green-600' : 'text-blue-600'} cursor-pointer`}
            onClick={() => handleUpdate('completed')}
          />
          <FaHeart
            size={24}
            color="#FF0000"
            className={` hover:fill-[#FF0000] ${item.favourite ? 'fill-[#FF0000]' : 'fill-gray-300'} cursor-pointer`}
            onClick={() => handleUpdate('favourite')}
          />
          {item.deleted ? (
            <MdDoNotDisturb
              size={24}
              color="#ff6a6e"
              className="cursor-not-allowed"
            />
          ) : (
            <MdOutlineDeleteSweep
              size={24}
              color="#FF0000"
              className="cursor-pointer"
              onClick={() => handleUpdate('deleted')}
            />
          )}
        </div>
      </li>
    </>
  );
}

export default TodoItem;
/*#7e995d*/
