import { configureStore } from '@reduxjs/toolkit'
import allData from './allData'


export default configureStore({
  reducer: {
    allData: allData
  }
})