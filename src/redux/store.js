import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice"; // Importation du reducer

// Création du store Redux
const store = configureStore({
  reducer: {
    todos: todoReducer, // Associe le reducer des tâches
  },
});

export default store;
