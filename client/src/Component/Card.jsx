import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCategoryByName, setMealById } from "../Redux/reducer/reducers";

const Card = ( {category} ) => {

    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = (category) => {
        
        let categoryName =  category.strCategory
        let mealId =  category.idMeal
        
        category.strCategory?dispatch(setCategoryByName(categoryName)): dispatch(setMealById(mealId))
        category.strCategory? navigate(`/foodList/${categoryName}`) : navigate(`/recipeDetails/${mealId}`)
    }   
    
    return (
<>

        <div className="container mx-auto p-6">
            <div className="flex flex-wrap gap-16 justify-center items-stretch">
                {category.map((category, index) => (
                    <div
                        key={index}
                        className="card w-[250px] flex flex-col bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 duration-200"
                    >
                        <img
                            src={category.strCategoryThumb || category.strMealThumb}
                            alt={category.strCategory || category.strMeal}
                            className="w-full object-cover bg-slate-100"
                        />

                        <div className="flex-1 p-4 text-center  flex flex-col justify-between">
                            <p className="text-xl font-semibold  text-lime-500 break-words mb-4">
                                {category.strCategory || category.strMeal}
                            </p>

                            <button
                                onClick={() => handleClick(category)}
                                className="inline-flex bg-lime-400 text-white text-lg font-medium px-4  rounded-2xl mx-auto transform hover:scale-110 duration-200"
                            >
                                View
                                <span className="ml-2 mt-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                                        />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Card;
