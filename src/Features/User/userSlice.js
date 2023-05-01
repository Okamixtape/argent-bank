import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogged: false,
  token: '',
  id: '',
  email: '',
  firstName: '',
  lastName: '',
  createdAt: '',
  updatedAt: '',
}

const userSlice = createSlice({
  name: 'userReducer',

  initialState: initialState,

  reducers: {
    // To save user's token in the state
    userAuthentification(state, action) {
      state.token = action.payload.body.token
    },

    // To save user's data in the state
    userLogin(state, action) {
      state.isLogged = true
      state.id = action.payload.id
      state.email = action.payload.email
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.createdAt = action.payload.createdAt
      state.updatedAt = action.payload.updatedAt
    },

    // To update (modify) the first and last name of the user in the state
    userUpdate(state, action) {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
    },

    // To reset the state to its initial value
    userLogout() {
      return initialState
    },
  },
})

export const { userLogin, userAuthentification, userUpdate, userLogout } =
  userSlice.actions
export default userSlice.reducer
