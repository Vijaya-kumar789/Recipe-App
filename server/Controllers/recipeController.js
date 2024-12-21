
const axios = require('axios')
const recipeController = {
   
    getCategory : async(req,res)=>{
        try {
            
            const foodCategory = await axios.get(`${process.env.BASE_URL}/categories.php`);

            res.status(200).json(foodCategory.data.categories );

        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },

    filterMealsByCategory : async( req,res)=>{

        try {
            console.log(base_url);
            const category = req.params.category;
            
            const filteredMeal = await axios.get(`${process.env.BASE_URL}/filter.php?c=${category}`);

            res.status(200).json(filteredMeal.data );

        } catch (error) {
            res.status(500).json({ message: error.message })
        }

    } ,
    getMealByCategory : async( req,res)=>{

        try {
            const id = req.params.id;
            
            const meal = await axios.get(`${process.env.BASE_URL}/lookup.php?i=${id}`);
            
            res.status(200).json(meal.data );

        } catch (error) {
            res.status(500).json({ message: error.message })
        }

    } ,

}
module.exports = recipeController;