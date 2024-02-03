import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice'
import userSlice from './userSlice'
import generalSlice from './generalSlice'

export default configureStore({
    reducer: {
        products: productSlice,
        user: userSlice,
        general: generalSlice
    },
})

// useSelector, store’dan belirli bir değeri almak için kullanılır.
// useDispatch, store’a aksiyon göndermek için kullanılır.