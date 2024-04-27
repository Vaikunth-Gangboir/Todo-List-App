// Logo and Images
import { useFirebase } from '../Contexts/FirebaseContext';
import Blogo from '../assets/Logo/brand-logo.svg';

//Icon
import { CiLogout } from 'react-icons/ci';

function Header() {
  const { handleLogout } = useFirebase();
  return (
    <header className="flex items-center justify-between">
      <img src={Blogo} alt="Brand Logo" />
      <h1 className="ml-10 text-xl font-bold uppercase lg:ml-60">Todo list</h1>
      <button
        className="border-[1px] border-gray-300 px-2 py-1 transition-all hover:shadow-sm"
        onClick={handleLogout}
      >
        Logout <CiLogout className="inline-block stroke-current" />
      </button>
    </header>
  );
}

export default Header;
