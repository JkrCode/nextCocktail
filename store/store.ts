import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'; // Falls Sie noch nicht zu Redux Toolkit migriert sind, verwenden Sie die Redux-Version
import { cocktailsReducer, addCocktail, removeCocktail } from './slices/cocktailSlice'; 
import {ingredientReducer,addIngredient, removeIngredient} from './slices/ingredientSlice'; 


const rootReducer = combineReducers({
  cocktails: cocktailsReducer, 
  ingredients: ingredientReducer,
});

const store = configureStore({
  reducer: rootReducer, 
  
});

export default store;
export { addCocktail, removeCocktail, addIngredient, removeIngredient };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;