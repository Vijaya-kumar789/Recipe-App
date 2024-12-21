import React, { useEffect } from "react";
import { WiStars } from "react-icons/wi";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setLoading } from "../Redux/reducer/reducers";
import { BACKEND_API } from "../../utility/config";
import { toast } from "react-toastify";
const Home = () => {
  const dispatch = useDispatch();

  const { category, loading } = useSelector((state) => state.app);

  const fetchFoodData = async () => {
    dispatch(setLoading(true));

    try {
      const res = await fetch(`${BACKEND_API}/recipe/category`);
      const food = await res.json();
      dispatch(setCategory(food || []));
    } catch (error) {
      toast.error("Error fetching food data:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchFoodData();
  }, []);

  return (
    <>
      <div className="text-xl md:text-4xl flex font-bold justify-center my-14 text-slate-500">
        <span className="my-auto invisible md:visible">
          <WiStars />
        </span>
        <span> Your Kitchen Companion for Every Meal</span>
        <span className="my-auto invisible md:visible">
          <WiStars />
        </span>{" "}
      </div>
      {loading ? (
        <>
          <div className="loader justify-self-center mt-40 "></div>
        </>
      ) : (
        <>
          <Card category={category} />
        </>
      )}
    </>
  );
};

export default Home;
