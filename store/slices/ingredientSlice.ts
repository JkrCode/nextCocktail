import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IngredientState {
  data: string[];
}

const initialState: IngredientState = {
  data: [],
};

const ingredientSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    addIngredient(state, action: PayloadAction<string>) {
      state.data.push(action.payload);
    },
    removeIngredient(state, action: PayloadAction<string>) {
      state.data = state.data.filter(ingredient => ingredient !== action.payload);
    },
  },
});

export const { addIngredient, removeIngredient } = ingredientSlice.actions;
export const ingredientReducer = ingredientSlice.reducer;
