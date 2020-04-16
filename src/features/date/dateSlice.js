import { createSlice } from '@reduxjs/toolkit'

export const dateSlice = createSlice({
  name: 'date',
  initialState: {
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  },
  reducers: {
    setDate: (state, { payload }) => ({
      ...payload,
    }),
    setDay: (state, { payload }) => ({
      ...state,
      day: payload,
    }),
    setMonth: (state, { payload }) => ({
      ...state,
      month: payload,
    }),
    setYear: (state, { payload }) => ({
      ...state,
      year: payload,
    }),
  },
})

export const {
  setDay, setMonth, setYear, setDate,
} = dateSlice.actions

export const selectDate = (state) => state.date
export const selectDay = (state) => state.date.day
export const selectMonth = (state) => state.date.month
export const selectYear = (state) => state.date.year

export default dateSlice.reducer
