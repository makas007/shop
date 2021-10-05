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
    names: [],
    itemsCart: []
  },
  reducers: {
    setToCartReducer(state, action){
      console.log(action.payload, "cart item");
      state.itemsCart.push(action.payload);
      console.log(state.itemsCart); 
    },
    delItemCart(state, action) {
      console.log('del func');
      state.itemsCart.splice(action, 1)
      console.log(this.itemsCart);
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
export const{ setToCartReducer, delItemCart } = allData.actions