import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginByUsername } from '../servises/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
    error: '',
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(LoginByUsername.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(LoginByUsername.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(LoginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;