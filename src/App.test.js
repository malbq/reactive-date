import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render } from '@testing-library/react'
import App from './App'

const mockStore = configureStore([])

describe('App', () => {
  const store = mockStore({
    date: {
      day: 20,
      month: 4,
      year: 2020,
    },
  })

  it('should match snapshot', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(getByTestId('app')).toMatchSnapshot()
  })
})
