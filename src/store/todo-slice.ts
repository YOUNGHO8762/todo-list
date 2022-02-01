import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type todo = { id: number; text: string };

const initialState: todo[] = [];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<todo>) => {
      state.push({ id: action.payload.id, text: action.payload.text });
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice;
