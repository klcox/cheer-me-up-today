import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchDadJoke = createAsyncThunk(
    "joke/fetchDadJoke",
    async () => {
        const response = await fetch("https://icanhazdadjoke.com/", {
            headers: { "Accept": "application/json" },
        });

        if (!response.ok) {
            throw new Error("Unable to get a joke. Status: " + response.status);
        }
         
        const data = await response.json();
        return data;       
    }
);

const initialState = { 
    joke: "",   
    isLoading: true,
    errMsg: ""
};

const dadJokeSlice = createSlice({
    name: "dadJoke",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDadJoke.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchDadJoke.fulfilled, (state, action) => {
                state.joke = action.payload;
                state.isLoading = false;
                state.errMsg = "";                
            })
            .addCase(fetchDadJoke.rejected, (state, action) => {
                state.isLoading = false;
                state.errMsg = action.error ? action.error.message : "Oops! Couldn't find a joke. Please try again";
            })
    }
});

export const dadJokeReducer = dadJokeSlice.reducer;