//Firebase
import { useFirebase } from '../Contexts/FirebaseContext';

// Logo and Images
import LoginImg from '../assets/Login/Login_Illustration.png';
import BLogo from '../assets/Logo/brand-logo.svg';
import GLogo from '../assets/Logo/google-logo.png';

function Login() {
  const { handleLogin } = useFirebase();

  return (
    <div className="  griq md grid h-screen w-screen overflow-hidden md:grid-cols-2 md:gap-20 md:bg-[url('/src/assets/Login/Login_Illustration.png')] md:bg-cover md:bg-no-repeat lg:bg-none">
      <div className=" hidden h-full items-end md:flex">
        <img
          src={LoginImg}
          alt="Login Image"
          className="w-full object-cover md:hidden lg:block xl:aspect-square"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-8 p-8 md:mt-40 md:justify-start md:gap-10 lg:mt-0 lg:justify-center xl:gap-12 ">
        <img src={BLogo} alt="Logo" className="h-20 md:h-16 lg:h-20 " />
        <div className="max-w-md rounded-sm bg-[#fafafc] px-4 py-8 shadow-md md:bg-transparent md:shadow-none lg:bg-[#fafafc] lg:shadow-md">
          <h1 className=" mb-4 text-center text-3xl font-medium uppercase md:mb-2 md:text-xl lg:mb-4 lg:text-3xl ">
            Login
          </h1>
          <p className="mb-6 text-justify md:text-xs lg:mb-8 lg:text-sm xl:mb-12 xl:text-start xl:text-base ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            nesciunt exercitationem, eaque doloremque laborum impedit
            doloremque, vitae, dolores perferendis aperiam debitis consequuntur
            hic quod eos commodi.
          </p>
          <button
            className="mx-auto flex items-center rounded-sm bg-blue-600 p-2 transition-all  hover:bg-blue-800 hover:shadow-md"
            onClick={handleLogin}
          >
            <img
              src={GLogo}
              alt="Google Logo"
              width={32}
              height={32}
              className="rounded-sm bg-white"
            />
            <span className="px-4 text-lg font-medium text-white">
              Login using Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
