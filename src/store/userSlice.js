import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  user_id: null,
  notes: [],
  agenda: [],
  todo: [],
  logged_in: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.username = action.payload.username;
      state.user_id = action.payload.user_id;
      state.notes = action.payload.notes;
      state.agenda = action.payload.agenda;
      state.todo = action.payload.todo;
      state.logged_in = true;
    },
    signin(state, action) {},
    logout(state) {
      state.logged_in = false;
      state.username = "";
      state.notes = [];
      state.agenda = [];
      state.todo = [];
    },
    deleteNote(state, action) {
      state.notes = state.notes.filter(note => note.id !== action.payload.id);
    }
  },
});

export const { setUsername, login, logout } = userSlice.actions;
export default userSlice.reducer;
