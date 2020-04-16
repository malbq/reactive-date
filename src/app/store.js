import { configureStore } from '@reduxjs/toolkit'
import dateReducer from '../features/date/dateSlice'

export default configureStore({
  reducer: {
    date: dateReducer,
  },
// eslint-disable-next-line no-underscore-dangle
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
