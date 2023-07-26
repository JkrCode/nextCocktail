import axios from "axios";
import IngredientPicker from "../components/IngredientPicker";
import { Fragment, useState } from "react";
import CocktailList from "../components/CocktailList";
import Drink from "../components/Interfaces/Drink";
import Head from "next/head";

function App() {

const [drinks, setDrinks] = useState<Drink[]>([]);

const [ingredients, setIngredients] = useState<string[]>([]);


async function handleClick () {
  const data = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
  setDrinks(data.data.drinks);
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
          <IngredientPicker
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
        </div>
        <div className="flex justify-center">
          <div className="w-2/5">
            <CocktailList ingredients={ingredients} data={drinks} />
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

