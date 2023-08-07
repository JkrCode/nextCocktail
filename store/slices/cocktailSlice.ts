import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import CocktailType from '../types/cocktail';

const cocktailsSlice = createSlice({
  name: "cocktails",
  initialState: { data: [] as CocktailType[] },
  reducers: {
    addCocktail(state, action: PayloadAction<CocktailType>) {
      state.data.push(action.payload);
    },
    removeCocktail(state, action: PayloadAction<CocktailType>) {
      const index = state.data.findIndex(cocktail => cocktail === action.payload);
      if (index !== -1) {
        state.data.splice(index, 1);
      }
    },
  },
});

export const cocktailsReducer = cocktailsSlice.reducer;
export const { addCocktail, removeCocktail } = cocktailsSlice.actions;
