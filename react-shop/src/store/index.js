import { configureStore } from '@reduxjs/toolkit'
import allData from './allData'
import sliceShop from './shopData'


export default configureStore({
  reducer: {
    allData: allData,
    sliceShop: sliceShop /* name/import */
  }
})