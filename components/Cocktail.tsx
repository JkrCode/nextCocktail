import React from "react";
import Drink from "./Interfaces/Drink";

interface CocktailProps {
  data: Drink;
  ingredients: string[];
}

const Cocktail: React.FC<CocktailProps> = function ({ data, ingredients }) {
  const ingredientComponents: React.ReactNode[] = [];

  for (let i = 1; i <= 4; i++) {
    const ingredientKey = `strIngredient${i}` as keyof Drink;
    const ingredientValue = data[ingredientKey];

    const Ingredient: React.FC = () => {
      if (ingredientValue !== null) {
        const lowerCaseIngredient = ingredientValue.toLowerCase();

        if (
          ingredients !== undefined &&
          ingredients.some(
            (ingredient: string) =>
              ingredient.toLowerCase() === lowerCaseIngredient
          )
        ) {
          return <p className="font-bold">{ingredientValue}</p>;
        } else {
          console.log(ingredients);
          return <p>{ingredientValue}</p>;
        }
      } else {
        return null; 
      }
    };

    ingredientComponents.push(<Ingredient key={ingredientKey} />);
  }

  return (
    <div className="flex mb-4">
      <p className="flex-none w-40 mr-4 h-16">{data.strDrink}</p>
      <div className="flex-col">{ingredientComponents}</div>
    </div>
  );
};

export default Cocktail;