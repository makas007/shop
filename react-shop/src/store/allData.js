import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchData = createAsyncThunk(
  'zxczxc',
  async function() {
    return await axios.get('https://retoolapi.dev/z4s4bl/data')
      .then((response) => {
        console.log(response.data, 'AXIOS')
        return response.data
      })
  }
)

const allData = createSlice({
  name:'qwe',
  initialState: {
    names: []
  },
  reducers: {
    getNames(state, action){
      console.log(action, "action");
      state.names = action.payload
    }
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      console.log('resolved');
      console.log(state);
      state.names = action.payload
    }
  }
})

export default allData.reducer;
export const{ getNames} = allData.actions