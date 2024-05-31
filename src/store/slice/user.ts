import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { User } from '@/lib/types';

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
    addUser(state, action: PayloadAction<User>) {
      const existingItem = state.users.find((item) => item.id === action.payload.id);
      if (existingItem) {
        toast.warn('User already exists!');
      } else {
        state.users.push(action.payload);
        toast.success('User added successfully!');
      }
    },
    editUser(state, action: PayloadAction<User>) {
      const index = state.users.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
        toast.success('User updated successfully!');
      } else {
        toast.error('User not found!');
      }
    },
    removeUser(state, action: PayloadAction<number>) {
      state.users = state.users.filter((item) => item.id !== action.payload);
      toast.success('User removed!');
    },
    removeAll(state) {
      state.users = [];
      toast.success('Users cleared!');
    },
  },
});

export const {
  setUsers,
  addUser,
  editUser,
  removeUser,
  removeAll,
} = userSlice.actions;

export default userSlice.reducer;
