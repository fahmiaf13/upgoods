import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, AuthErrorCodes, GoogleAuthProvider, signInWithPopup, browserLocalPersistence, setPersistence } from "firebase/auth";

export const googleAuth: any = createAsyncThunk("auth/google", async (userAuth, { rejectWithValue }) => {
  try {
    const provider = new GoogleAuthProvider();
    const response = await signInWithPopup(auth, provider);
    return response;
  } catch (error) {
    console.log(error);
    rejectWithValue(error);
  }
});

export interface GoogleAuthState {
  data: string[];
  error: string[] | null;
  loading: Boolean;
  success: Boolean;
}

const initialState: GoogleAuthState = {
  data: [],
  error: null,
  loading: false,
  success: false,
};

const googleAuthSlice = createSlice({
  name: "googleLogin",
  initialState,
  reducers: {
    logOut: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(googleAuth.fulfilled, (state, { payload }) => {
        state.data = payload.user;
        state.error = null;
        state.loading = false;
        state.success = true;
      })
      .addCase(googleAuth.pending, (state, { payload }) => {
        state.error = payload;
        state.loading = true;
        state.success = false;
      })
      .addCase(googleAuth.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
        state.success = false;
      });
  },
});

export const { logOut } = googleAuthSlice.actions;
export default googleAuthSlice.reducer;
