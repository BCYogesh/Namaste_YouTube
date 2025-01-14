import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        toggleMenuFlag: true,
    },
    reducers: {
        toggleMenu: (state) => {
            state.toggleMenuFlag = !state.toggleMenuFlag;
        },
        closeMenu: (state) => {
            state.toggleMenuFlag = false;
        }
    }
});

export const { toggleMenu, closeMenu } = appSlice.actions;

export default appSlice.reducer;
