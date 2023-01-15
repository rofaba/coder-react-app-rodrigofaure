import image404 from "../../assets/img/SW404.jpeg";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div className="container mx-auto bg-slate-100 flex flex-col items-center">
      <h1 className=" pt-4 text-6xl text-orange-400 uppercase font-semi-bold">
        {" "}
        error 404{" "}
      </h1>
      <img className="py-8 w-2/5" src={image404} alt="error 404" />
      <div className="flex justify-center mb-20">
        <Link to="/">
          <div className="">
            <button className="py-2 px-6 mx-auto bg-orange-300 text-white text-lg font-bold rounded-md hover:bg-orange-400">
              {" "}
              Volver a la Tienda{" "}
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NoMatch;
