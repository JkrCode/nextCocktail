import axios from "axios";
import IngredientPicker from "../components/IngredientPicker";
import { Fragment } from "react";
import CocktailList from "../components/CocktailList";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { addCocktail } from "@/store/store";

function App() {
  const dispatch = useDispatch();


  async function handleClick() {
    try {
      const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
      const data = response.data.drinks; 
    
      // Füge jeden Cocktail dem Store hinzu
      data.forEach((cocktail:any) => {
        const ingredients = [
          cocktail.strIngredient1,
          cocktail.strIngredient2,
          cocktail.strIngredient3,
          cocktail.strIngredient4,
        ].filter(Boolean); 
        
        dispatch(
          addCocktail({
            label: cocktail.strDrink,
            type: cocktail.strCategory,
            id: cocktail.idDrink,
            collapsed: true,
            ingredients, 
          })
        );
      });
    } catch (error) {
      console.error('Error fetching cocktails:', error);
    }
  }
  

  
  return (
    <Fragment>
      <Head>
        <title>Cocktail-Finder</title>
        <meta
          name='Cocktail-Finder MainPage'
          content='Look which ingredients you have and find the right cocktail for you'
        />
      </Head>
      <div className="container mx-auto my-8">
        <h4 className="italic font-bold mb-4 text-center">Enter Ingredient</h4>
        <div className="flex justify-center">
          <IngredientPicker/>
        </div>
        <div className="flex justify-center">
          <div className="w-2/5">
            <CocktailList/>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            onClick={handleClick}
          >
            Get Drinks
          </button>
        </div>
      </div>
    </Fragment>
      
  )
}

export default App

