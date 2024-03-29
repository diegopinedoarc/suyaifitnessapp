import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface UserData {
  isAuth: boolean
}

const initialState: UserData = {
  isAuth: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userAuth(state, action: PayloadAction<UserData>) {
      const { isAuth } = action.payload
      state.isAuth = isAuth
    },
  },
})

export const { userAuth } = userSlice.actions

export const selectUser = (state: RootState) => state.user
export const selectIsAuth = (state: RootState) => state.user.isAuth

export const userSliceReducer = userSlice.reducer
