import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const shopDada = createAsyncThunk(
  'allShopData',
  async function() {
    return await axios.get('https://retoolapi.dev/tB2izy/data')
      .then((response) => {
        console.log(response.data, 'shop-data')
        return response.data
      })
  }
)

const sliceShop = createSlice({
  name: 'slice-shop',
  initialState: {
    cardInfo: []
  },
  extraReducers: {
    [shopDada.fulfilled]: (state, action) => {
      console.log('shopData fulfilled');
      console.log(state.cardInfo, 'state-cardInfo');
      state.cardInfo = action.payload
    }
  }
})

export default sliceShop.reducer;