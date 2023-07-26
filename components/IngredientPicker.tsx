import { useState, FormEvent, ChangeEvent, ReactNode } from "react";

interface IngredientPickerProps {
  ingredients: string[];
  setIngredients: React.Dispatch<React.SetStateAction<string[]>>;
}

const IngredientPicker: React.FC<IngredientPickerProps> = ({
  ingredients,
  setIngredients,
}) => {
  const [inputIngredient, setInputIngredient] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputIngredient(event.target.value);
  };

  const handleClick = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setIngredients((prevIngredients: string[]) => [
      ...prevIngredients,
      inputIngredient,
    ]);
    setInputIngredient("");
  };

  const listOfIngredients: ReactNode = ingredients.map((ingredient: string) => (
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