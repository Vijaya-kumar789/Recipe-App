import React, { useContext } from "react";
import {
  Link,
  Outlet,
  useMatch,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import userServices from "../Services/userServies";

const NavBar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const match = useMatch("/foodList/:name");
  const match1 = useMatch("/recipeDetails/:id");
  const navigate = useNavigate();

  const handleToggle = () => {
    const menu = document.getElementById("navbar-default");
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });

    userServices
      .logout()
      .then((res) => {
        toast.success(res.data.message);

        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <>
      <section className="shadow-lg sticky top-0 z-10 bg-white">
        <nav className="flex flex-wrap items-center justify-between w-5/6 mx-auto py-3 ">
          <div className="">
            <Link to="/">
              <span className="text-lime-400 text-3xl font-bold">Bite</span>{" "}
              <span className="text-2xl font-thin">Buddy</span>{" "}
            </Link>
           
          </div>
          <button
              onClick={handleToggle}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col md:flex-row md:items-center mt-3 md:mt-0 gap-5 md:gap-10">
              {user ? (
                <>
                  {match && (
                    <li className="inline-flex mr-7 pb-2 text-xl  font-semibold text-slate-600">
                      <Link to="/">Home</Link>
                    </li>
                  )}
                  {match1 && (
                    <>
                      
                      <li className="inline-flex mr-5 text-xl  font-semibold text-slate-600 ">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="inline-flex mr-5 text-xl font-semibold  text-slate-600 ">
                        <button onClick={handleBack}>Food List</button>
                      </li>
                    </>
                  )}

                  <li className="md:inline-flex gap-7">
                    <h4 className="capitalize text-3xl font-bold text-lime-500">
                      {user.userName}
                    </h4>
                    <button
                      className="inline-flex mt-1 text-xl gap-1 font-semibold "
                      onClick={handleLogout}
                    >
                      Logout
                      <span className="text-lime-400 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                          />
                        </svg>
                      </span>
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <li className="inline-flex gap-1 text-xl font-semibold ">
                      Login{" "}
                      <span className="text-lime-400 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                          />
                        </svg>
                      </span>
                    </li>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </nav>
      </section>
      <Outlet />
    </>
  );
};

export default NavBar;
