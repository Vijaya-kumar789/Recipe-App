import {createSlice} from '@reduxjs/toolkit'


export const listFoodRecipeSlice = createSlice({
    name:"foodRecipe",
    initialState:{
        category:[],
        categoryName:'',
        recipeByCategory:[],
        mealById:'',
        recipeById:{},
        loading:false,
    },
    reducers:{
        setCategory:(state, action)=>{
            state.category = action.payload;
        },
        setLoading:(state, action)=>{
            state.loading = action.payload;
        },
        setCategoryByName:(state,action) => {
            state.categoryName = action.payload;
        },
        setRecipeByCategory:(state,action) => {
            state.recipeByCategory = action.payload;
        },
        setMealById:(state,action) => {
            state.mealById = action.payload;
        },
        setRecipeById:(state,action) => {
            state.recipeById = action.payload;
        },
        
    }
})


export const { setCategory, setLoading, setCategoryByName, setRecipeByCategory, setMealById, setRecipeById } = listFoodRecipeSlice.actions