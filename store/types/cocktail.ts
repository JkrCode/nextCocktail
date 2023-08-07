export default interface CocktailType {
    label: string;
    type: string;
    id: number;
    collapsed: boolean;
    ingredients: ( string | null)[]
  }
 