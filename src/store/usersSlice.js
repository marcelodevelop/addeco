import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      const userId = action.payload;
      state.users = state.users.filter(user => user.id !== userId);
    },
    updateUser: (state, action) => {
      const { id, email, firstName, lastName, avatar } = action.payload;
      const userIndex = state.users.findIndex(user => user.id === id);
      if (userIndex !== -1) {
        state.users[userIndex].email = email;
        state.users[userIndex].firstName = firstName;
        state.users[userIndex].lastName = lastName;
        state.users[userIndex].avatar = avatar;
      }
    },
  },
});

export const { setUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;