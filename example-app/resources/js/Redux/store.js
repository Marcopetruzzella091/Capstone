import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Testslice'

export default configureStore({
    reducer: {
        counter: counterReducer
    },
})