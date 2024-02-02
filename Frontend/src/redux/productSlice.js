import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    urunlerArr: [],// tum urunleri bu dizide tutacagim
    loading: false,
}
export const getProducts = createAsyncThunk(
    'urunler',
    async () => {
        try {
            const response = await fetch(`http://localhost:4000/products`);
            if (!response.ok) {
                throw new Error(`HTTP Hatası! Durum: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('HATA:', error);
            throw error; // Bu hata tekrar fırlatarak rejected tetiklenebilir.
        }
    }
);


export const productSlice = createSlice({
    name: 'urun',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            // verinin yuklenme bekleyisini pending temsil eder
            state.loading = true
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            // verinin yuklenmesini fulfilled temsil eder
            state.loading = false
            state.urunlerArr = action.payload
            // getProducts.fulfilled yani veri yukleme tamamlandıysa veriler urunlerArr ye yazılır
        })
    }
})
export default productSlice.reducer

// createAsyncThunk, asenkron işlemler için özel olarak tasarlanmış bir Redux eylemi oluşturur.