import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const pendingAction = action => action.type.endsWith('/pending');

const rejectedAction = action => action.type.endsWith('/rejected');

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleReject = (state, { payload }) => {
  state.items = payload;
  state.isLoading = false;
  state.error = null;
};

const handleContactsFetch = (state, { payload }) => {
  state.items = payload;
  state.isLoading = false;
  state.error = null;
};

const handleAddContact = (state, { payload }) => {
  state.items.push(payload);
  state.isLoading = false;
  state.error = null;
};

const handleDeleteContact = (state, { payload }) => {
  const index = state.items.findIndex(phone => phone.id === payload.id);
  state.items.splice(index, 1);
  state.error = null;
  state.isLoading = false;
};

const phoneSlice = createSlice({
  name: 'phones',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleContactsFetch)
      .addCase(addContact.fulfilled, handleAddContact)
      .addCase(deleteContact.fulfilled, handleDeleteContact)
      .addMatcher(pendingAction, handlePending)
      .addMatcher(rejectedAction, handleReject);
  },
});

export const { addPhone, deletePhone } = phoneSlice.actions;
export const phoneReducer = phoneSlice.reducer;
