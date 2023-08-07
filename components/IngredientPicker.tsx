import { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIngredient } from "../store/slices/ingredientSlice"; 
import { RootState } from "../store/store"; 

interface IngredientPickerProps {}

const IngredientPicker: React.FC<IngredientPickerProps> = () => {
  const [inputIngredient, setInputIngredient] = useState<string>("");
  const dispatch = useDispatch();
  const ingredients = useSelector((state: RootState) => state.ingredients.data);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputIngredient(event.target.value);
  };

  const handleClick = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(addIngredient(inputIngredient));
    setInputIngredient("");
  };

  const listOfIngredients = ingredients.map((ingredient: string) => (
    <div key={ingredient}>{ingredient}</div>
  ));

  return (
    <div>
      <div>{listOfIngredients}</div>
      <form onSubmit={handleClick}>
        <input
          className="rounded border-2"
          onChange={handleChange}
          value={inputIngredient}
        />
      </form>
    </div>
  );
};

export default IngredientPicker;