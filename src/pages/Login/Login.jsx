import { Link } from "react-router-dom";
import Navbar from "../Shared/NavBar/Navbar";

const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
             <header className="bg-gray-900 pattern">
      <div className="container px-6 mx-auto">

        <div className="flex flex-col items-center py-6 lg:h-[91vh] sm:h-screen lg:flex-row">
          <div className="lg:w-1/2">
            <h3 className="mt-2 text-6xl font-bold text-gray-100">
              Hello <span className="text-pink-500">Guest</span><br/><span className="text-pink-500">Login</span> Now
                            </h3>
                            

            <p className="mt-4 text-gray-100">Please Login to meet our team and know about us also you can connect with us</p>
          </div>

          <div className="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
            <div className="w-full max-w-md bg-white rounded-lg dark:bg-gray-800">
              <div className="px-6 py-8 text-center">
                <h2 className="text-2xl font-semibold text-gray-700 dark:text-white fo">Login</h2>

                <form action="#">
                  <div className="mt-4 text-white">
                    <input className="block w-full px-4 py-2 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring" required type="email" name="email" placeholder="Email" aria-label="Email address" />
                    <input className="block w-full px-4 py-2 mt-4 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring" required type="password" name="password" placeholder="Password" aria-label="Password" />
                  </div>

                  <div className="flex items-center justify-between mt-4">
                <p href="#" className="text-sm hover:underline text-white">Don't have an Account? <Link to="/register" className="text-blue-600 pl-2"> Register</Link></p>

                    <button className="btn btn-secondary text-white">Sign In</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
        </div>
    );
};

export default Login;