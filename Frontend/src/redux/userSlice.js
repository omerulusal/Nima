import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    user: {},
    isAuth: false,
    isLoading: false,
};


export const register = createAsyncThunk(
    "register",
    async (gelenVeri) => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringfy(gelenVeri)
            };
            const response = await fetch("http://localhost:4000/register", requestOptions)
            if (!response.ok) {
                throw new Error("HTTP Hatası: Durum", response.status)
            }
            const data = response.json();
            return data;

        } catch (error) {
            console.error(error)
            throw error
        }
    }
)

export const login = createAsyncThunk(
    "login",
    async (gelenVeri) => {
        try {
            const requestOptions = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: gelenVeri.email, password: gelenVeri.password })
            }
            const response = await fetch("http://localhost:4000/login", requestOptions)
            if (!response.ok) {
                throw new Error("HTTP Hatası: Durum", response.status)
            }
            const data = response.json();
            localStorage.setItem("token", data?.token)//backendte oluşturdugum tokeni local storage da tutacagım
            return data

        } catch (error) {
            console.error(error)
            throw error
        }
    }
)


export const profile = createAsyncThunk(
    "profile",
    async (id) => {
        try {
            localStorage.getItem("token")//localStoragedan token verimi aldım
            const response = await fetch(`http://localhost:4000/me/${id}`,
                {
                    headers: {
                        authorization: `bearer ${token}`,
                    }
                });
            if (!response.ok) {
                throw new Error("HTTP Hatası: Durum", response.status)
            }
            const data = response.json();
            return data;
        } catch (error) {
            console.error(error)
            throw error
        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(register.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload
            state.isAuth = true
        })
        builder.addCase(login.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload
            state.isAuth = true
        })
        builder.addCase(profile.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(profile.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload
            state.isAuth = true
        })
    }
})

export const { } = userSlice.actions;
export default userSlice.reducer;