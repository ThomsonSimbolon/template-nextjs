import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * Auth Slice - GLOBAL State
 * 
 * Purpose: Manage authentication state with mock user data
 * Why in Redux: Auth is global state, needed across many components
 * 
 * Note: This is MOCK data for UI demonstration purposes.
 * In a real application, this would integrate with actual auth backend.
 */

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  avatar?: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

// Mock user data for demonstration
const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'admin',
  avatar: undefined, // Can add avatar URL later
};

const initialState: AuthState = {
  isAuthenticated: true, // Mock: user is logged in
  user: mockUser,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

export const { login, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;
