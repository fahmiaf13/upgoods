// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { combineReducers } from "@reduxjs/toolkit";
// import { createSlice } from "@reduxjs/toolkit";
// import { auth } from "../../config/firebase";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, AuthErrorCodes, GoogleAuthProvider, signInWithPopup, browserLocalPersistence, setPersistence, FacebookAuthProvider } from "firebase/auth";

// export const facebookAuth: any = createAsyncThunk("auth/facebook", async (userAuth, { rejectWithValue }) => {
//   try {
//     const provider = new FacebookAuthProvider();
//     const response = await signInWithPopup(auth, provider);
//     return response;
//   } catch (error) {
//     return rejectWithValue(error);
//   }
// });

// export const googleAuth: any = createAsyncThunk("auth/google", async (userAuth, { rejectWithValue }) => {
//   try {
//     const provider = new GoogleAuthProvider();
//     const response = await signInWithPopup(auth, provider);
//     return response;
//   } catch (error) {
//     return rejectWithValue(error);
//   }
// });

// export const emailPassAuthRegister: any = createAsyncThunk("auth/register", async (formData: any, { rejectWithValue }) => {
//   try {
//     const response = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
//     return response;
//   } catch (error) {
//     return rejectWithValue(error);
//   }
// });

// export const emailPassAuthLogin: any = createAsyncThunk("auth/signIn", async (formData: any, { rejectWithValue }) => {
//   try {
//     const response = await signInWithEmailAndPassword(auth, formData.email, formData.password);
//     return response;
//   } catch (error) {
//     return rejectWithValue(error);
//   }
// });

// export interface GoogleAuthState {
//   data: string[];
//   error: string[] | null;
//   loading: Boolean;
//   success: Boolean;
// }

// const initialState: GoogleAuthState = {
//   data: [],
//   error: null,
//   loading: false,
//   success: false,
// };

// const emailAndPasswordUserSlice = createSlice({
//   name: "emailAndPasswordUser",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(emailPassAuthLogin.fulfilled, (state, { payload }) => {
//         state.data = payload;
//         state.error = null;
//         state.loading = false;
//         state.success = true;
//       })
//       .addCase(emailPassAuthLogin.pending, (state, { payload }) => {
//         state.error = payload;
//         state.loading = true;
//         state.success = false;
//       })
//       .addCase(emailPassAuthLogin.rejected, (state, { payload }) => {
//         state.error = payload;
//         state.loading = false;
//         state.success = false;
//       });
//   },
// });

// const googleAuthSlice = createSlice({
//   name: "googleLogin",
//   initialState,
//   reducers: {
//     logOut: () => initialState,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(googleAuth.fulfilled, (state, { payload }) => {
//         state.data = payload;
//         state.error = null;
//         state.loading = false;
//         state.success = true;
//       })
//       .addCase(googleAuth.pending, (state, { payload }) => {
//         state.error = null;
//         state.loading = true;
//         state.success = false;
//       })
//       .addCase(googleAuth.rejected, (state, { payload }) => {
//         state.error = payload;
//         state.loading = false;
//         state.success = false;
//       });
//   },
// });

// const authReducer = combineReducers({
//   google: googleAuthSlice.reducer,
//   emailAndPassword: emailAndPasswordUserSlice.reducer,
// });

// export const { logOut } = googleAuthSlice.actions;
// export default authReducer;

"use strict";
