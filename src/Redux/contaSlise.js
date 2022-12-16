import { createSlice } from '@reduxjs/toolkit';
import { fetchThunk, AddThunk, deleteThunk } from './contactsActions';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(AddThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(AddThunk.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
        state.isLoading = false;
      })
      .addCase(AddThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
        state.isLoading = false;
      })
      .addCase(deleteThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

// export const { add, remove } = contactsSlice.actions;
