import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from "./Component/Home"
import Login from "./Component/Login/Login"
import Register from "./Component/Login/Register"
import FoodList from "./Component/FoodList"
import RecipeDetails from "./Component/RecipeDetails"
import NavBar from "./Component/NavBar"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<NavBar/>}>

      
    <Route path="/login" element={<Login/>}  />
        
        <Route path="/register" element={<Register/>}  />
      <Route path="/" element={<Home/>}  />
      <Route path="/foodList/:name" element={<FoodList/>}  />
      <Route path="/recipeDetails/:id" element={<RecipeDetails/>}  />
      </Route>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
