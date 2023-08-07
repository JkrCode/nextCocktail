import { useSelector } from "react-redux";
import { RootState } from "../store/store"; // Passe den Pfad an
import Cocktail from "./Cocktail";

interface CocktailListProps {}

const CocktailList: React.FC<CocktailListProps> = function () {
  const ingredients = useSelector((state: RootState) => state.ingredients.data); // Hole die Zutaten aus dem Redux Store
  const cocktails = useSelector((state: RootState) => state.cocktails.data);

  const ListOfCocktails = cocktails.map((item, index) => {
    return (
      <div key={index} className="bg-white rounded-md shadow-md p-4 mb-4">
        <Cocktail ingredients={ingredients} data={item}></Cocktail>
      </div>
    );
  });

  return <div>{ListOfCocktails}</div>;
};

export default CocktailList;