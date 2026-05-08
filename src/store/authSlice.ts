import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthStatus = 'authenticated' | 'unauthenticated' | 'loading';

interface UserProfile {
  name: string;
  role: string;
  email: string;
}

interface AuthState {
  user: UserProfile | null;
  token: string | null;
  status: AuthStatus;
}

const initialState: AuthState = {
  user: null,
  token: null,
  status: 'unauthenticated',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.status = 'loading';
    },
    loginSuccess(state, action: PayloadAction<{ token: string; user: UserProfile }>) {
      state.status = 'authenticated';
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout(state) {
      state.status = 'unauthenticated';
      state.token = null;
      state.user = null;
    },
  },
});

export const { loginStart, loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
