import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchData = createAsyncThunk(
  'zxczxc',
  async function() {
    return await axios.get('https://retoolapi.dev/z4s4bl/data')
      .then((response) => {
        return response.data
      })
  }
)

const allData = createSlice({
  name:'qwe',
  initialState: {
    names: [],
    itemsCart: []
  },
  reducers: {
    setToCartReducer(state, action){
      state.itemsCart.push(action.payload);
      console.log(state.itemsCart);
    },
    delItemCart(state, action) {
      state.itemsCart.splice( action.payload, 1)
    }
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      console.log('resolved');
      state.names = action.payload
    }
  }
})

export default allData.reducer;
export const{ setToCartReducer, delItemCart } = allData.actions