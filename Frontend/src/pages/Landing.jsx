import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="pt-5  bg-cover bg-right bg-[url(https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1696243800/assets/62/3b076a-3406-4f3b-89de-2cf1a2ccb907/original/uber-one.jpg)] h-screen w-full bg-red-400 flex flex-col justify-between">
        <img
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt="logo"
          className="w-28 h-20 ml-5"
        />
        <div className="bg-white px-5 py-5 pb-8">
          <h2 className="text-4xl font-bold"> Get Started </h2>
          <Link to="/login">
            <button className="bg-black text-xl text-white px-4 py-2 mt-5 w-full rounded-lg">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
