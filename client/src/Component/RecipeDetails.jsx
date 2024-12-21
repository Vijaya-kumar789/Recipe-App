import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setLoading,setRecipeById } from '../Redux/reducer/reducers';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { BACKEND_API } from '../../utility/config';

const RecipeDetails = () => {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const  {recipeById, mealById, loading}  = useSelector((state) => state.app);

  const fetchFoodData = async () => {
    if(!user || user === null || user === undefined){
      toast.error('Please Login')
      navigate('/')
    }else{
    dispatch(setLoading(true))
      try {
          const res = await fetch(`${BACKEND_API}/recipe/getById/${mealById}`,{
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        });
          const data = await res.json();
          
          dispatch(setRecipeById(data.meals[0] || {})); 
      } catch (error) {
          toast.error("Error fetching food data:", error);
      }finally{
        dispatch(setLoading(false))
  
      }
  }};

  useEffect(() => {
      if (mealById) {
          fetchFoodData();
      }
  }, [mealById]); 

    

  return (
<>
    {loading ? (<>
      <div className="loader justify-self-center mt-40 "></div>
        </>):(<>

          <section className='w-11/12 mb-5 mt-4 mx-auto shadow-2xl px-10 py-5 rounded-xl font-poppins'>
          <h1 className='my-8  text-center text-xl sm:text-2xl md:text-3xl font-semibold text-lime-400 font-sans'>Explore <span className='font-bold'>'{recipeById.strMeal}'</span>  – Ingredients & Method</h1>
            <div className=' md:w-3/6'>
            <img 
            src={recipeById.strMealThumb}
            alt={recipeById.strMeal}
            className="w-full h-96 rounded-lg"
          />  
            <h1 className="mt-6 text-2xl font-bold text-gray-800 ">{recipeById.strMeal}</h1>
          <p className="mt-2 text-gray-600 text-sm">Category: <span className="font-medium">{recipeById.strCategory}</span> | Area: <span className="font-medium">{recipeById.strArea}</span></p>
          <p className="mt-2 text-gray-600 text-sm">Tags: <span className="font-medium">{recipeById.strTags}</span></p>
        
            </div>
            <div className="mt-7 mx-auto text-center md:text-start">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Ingredients 🥣</h2>
            <ul className="px-2 py-2 text-gray-700 gap-x-10 flex flex-wrap items-center justify-start">
        {Array.from({ length: 20 }, (_, i) => i + 1) 
          .map((index) => {
            const ingredient = recipeById[`strIngredient${index}`];
            const measure = recipeById[`strMeasure${index}`];
            return (
              ingredient &&
              measure && (
                <li
                  key={index}
                  className="relative pl-8"
                >
                  <span className="absolute left-0 font-bold">{index}.</span>
                  {measure} {ingredient} <span className='ml-3'>|</span>
                </li>
              )
            );
          })}
      </ul>
      
          </div>
       <div className="my-6 ">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 text-center md:text-start ">Instructions 📝</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
            {recipeById.strInstructions}
            </p>
          </div>
          </section>
         </>)}

         </>
  )
}

export default RecipeDetails