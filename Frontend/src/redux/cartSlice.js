import { createSlice } from '@reduxjs/toolkit'
const fetchFromLocalStorage = () => {
    let cart = localStorage.getItem('cart')
    if (cart) {
        return JSON.parse(localStorage.getItem('cart'))
    } else {
        return []
    }
}
const storeInLocalStorage = (data) => {
    localStorage.setItem('cart', JSON.stringify(data))
}
const initialState = {
    carts: fetchFromLocalStorage()
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.carts.push(action.payload)
            storeInLocalStorage(state.carts)
        },
        removeFromCart: (state, action) => {
            state.carts = state.carts.filter((item) => item.id !== action.payload)
            storeInLocalStorage(state.carts)
        },
        clearCart: (state) => {
            state.carts = []
            storeInLocalStorage(state.carts)
        }
    }
})


export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
