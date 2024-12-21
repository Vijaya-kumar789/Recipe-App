import React, { useContext, useEffect } from "react";
import Card from "./card";
import { useDispatch, useSelector } from "react-redux";
import { setRecipeByCategory, setLoading } from "../Redux/reducer/reducers";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { BACKEND_API } from "../../utility/config";

const FoodList = () => {
    const {user} = useContext(AuthContext)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { categoryName, recipeByCategory, loading  } = useSelector((state) => state.app);
let category = recipeByCategory

    const fetchFoodData = async () => {
        if(!user || user === null || user === undefined){
            toast.error('Please Login')
            navigate('/')
          }else{
        dispatch(setLoading(true))

        try {
            const res = await fetch(`${BACKEND_API}/recipe/filterByCategory/${categoryName}`,{
              method: "GET",
              credentials: "include", 
              headers: {
                  "Content-Type": "application/json",
              },
          });
            const data = await res.json();
            
            dispatch(setRecipeByCategory(data.meals || []));
        } catch (error) {
            toast.error("Error fetching food data:", error);
        }finally{
            dispatch(setLoading(false))
      
          }
    }};

    useEffect(() => {
        fetchFoodData();
    }, []); 

    return (
    <>
        <h1 className="my-8  text-center text-xl sm:text-2xl md:text-3xl font-semibold text-lime-400">Find the Perfect Dish to Satisfy Your Hunger</h1>
     {loading ? (<>
        <div className="loader justify-self-center mt-40 "></div>
        </>):(<>
        <Card category={category} />
      </>)}
    </>
    );
};

export default FoodList;
