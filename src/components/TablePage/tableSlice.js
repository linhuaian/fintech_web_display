import { createSlice } from '@reduxjs/toolkit';

const tableSlice = createSlice({
  name: 'table',
  initialState: {    
    query: "",
    columns: [],
    rows: [],
    errMsg: null
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setColumns(state, action) {      
      state.columns = action.payload;
    },
    setRows(state, action) {
      state.rows = action.payload;
    },
    setError(state, action) {
      state.errMsg = action.payload;
    }
  },
});

export const {
  setQuery,
  setColumns,
  setRows,
  setError,
} = tableSlice.actions;

export default tableSlice.reducer;