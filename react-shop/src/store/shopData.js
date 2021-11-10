import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const shopDada = createAsyncThunk(
  'allShopData',
  async function() {
    return await axios.get('https://retoolapi.dev/tB2izy/data')
      .then((response) => response.data)
  }
)

const sliceShop = createSlice({
  name: 'slice-shop',
  initialState: {
    cardInfo: [],
    itemsCart: []
  },
  reducers: {
    setItemToCart(state, action){
      state.itemsCart.push(action.payload);
      console.log(state.itemsCart);
    },
    delItemCart(state, action) {
      state.itemsCart.splice( action.payload, 1)
    }
  },
  extraReducers: {
    [shopDada.fulfilled]: (state, action) => {
      // console.log('shopData fulfilled');
      // console.log(state.cardInfo, 'state-cardInfo');
      state.cardInfo = action.payload
    }
  }
})

export default sliceShop.reducer;
export const {setItemToCart, delItemCart} = sliceShop.actions