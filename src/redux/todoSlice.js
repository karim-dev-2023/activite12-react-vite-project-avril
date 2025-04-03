import { createSlice } from "@reduxjs/toolkit";

// État initial du store
const initialState = [];

// Création du slice Redux pour les tâches
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Action pour ajouter une tâche
    addTodo: (state, action) => {
      return [
        ...state,
        { id: Date.now(), texte: action.payload, completed: false },
      ];
    },
    // Action pour marquer une tâche comme terminée
    toggleTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
});

// Exportation des actions et du reducer
export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;