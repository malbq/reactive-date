import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render } from '@testing-library/react'
import Date, { Day, Month, Year } from './Date'

const mockStore = configureStore([])

describe('Date', () => {
  let store

  beforeEach(() => {
    store = mockStore({
      date: {
        day: 20,
        month: 4,
        year: 2020,
      },
    })
  })

  it('should render full date', () => {
    const { getByTestId } = render(
      <Provider store={store}><Date /></Provider>
    )
    expect(getByTestId('date')).toHaveTextContent('20/4/2020')
  })

  it('should render only the day', () => {
    const { getByTestId } = render(
      <Provider store={store}><Day /></Provider>
    )
    expect(getByTestId('day')).toHaveTextContent('20')
  })

  it('should render only the month', () => {
    const { getByTestId } = render(
      <Provider store={store}><Month /></Provider>
    )
    expect(getByTestId('month')).toHaveTextContent('4')
  })

  it('should render only the year', () => {
    const { getByTestId } = render(
      <Provider store={store}><Year /></Provider>
    )
    expect(getByTestId('year')).toHaveTextContent('2020')
  })
})
