import Img404 from '../assets/404 Not Found/404_Image.png';

function PageNotFound() {
  return (
    <div className="">
      <div className="flex w-full items-center justify-center">
        <img src={Img404} alt="404 Image" className="object-cover" />
      </div>
    </div>
  );
}

export default PageNotFound;
