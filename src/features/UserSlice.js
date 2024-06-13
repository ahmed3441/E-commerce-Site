import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

let nextUserId = 1;

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = { id: nextUserId++, ...action.payload };
      state.user.push(newUser);
    },

    deletedUser: (state, action) => {
      state.user = state.user.filter(user => user.id !== action.payload);
    },

    updateUser: (state, action) => {
      const index = state.user.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        state.user[index] = action.payload;
      }
    },
  },
});

export const { addUser, deletedUser, updateUser } = usersSlice.actions;
export default usersSlice.reducer;
