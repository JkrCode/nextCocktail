import React from "react";
import  CocktailType from "../store/types/cocktail"; 

interface CocktailProps {
  data: CocktailType;
  ingredients: string[];
}

const Cocktail: React.FC<CocktailProps> = function ({ data, ingredients }) {
  const ingredientComponents: React.ReactNode[] = [];

  for (let i = 0; i < data.ingredients.length; i++) {
    const ingredientValue = data.ingredients[i];

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
          return <p>{ingredientValue}</p>;
        }
      } else {
        return null;
      }
    };

    ingredientComponents.push(<Ingredient key={i} />);
  }

  return (
    <div className="flex mb-4">
      <p className="flex-none w-40 mr-4 h-16">{data.label}</p>
      <div className="flex-col">{ingredientComponents}</div>
    </div>
  );
};

export default Cocktail;