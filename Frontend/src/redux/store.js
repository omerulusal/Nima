import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice'

export default configureStore({
    reducer: {
        products: productSlice
    },
})

// useSelector, store’dan belirli bir değeri almak için kullanılır.
// useDispatch, store’a aksiyon göndermek için kullanılır.