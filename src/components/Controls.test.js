import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render } from '@testing-library/react'
import Controls from './Controls'
import { setDay, setMonth, setYear } from '../features/date/dateSlice'

const mockStore = configureStore([])

describe('Controls', () => {
  let store
  let component

  beforeEach(() => {
    store = mockStore({})
    store.dispatch = jest.fn()

    component = (
      <Provider store={store}>
        <Controls />
      </Provider>
    )
  })

  it('should dispatch setDay action', () => {
    const { getByTestId } = render(component)
    const dayButton = getByTestId('dayButton')
    dayButton.click()
    expect(store.dispatch.mock.calls[0][0].type).toBe(setDay.type)
  })

  it('should dispatch setMonth action', () => {
    const { getByTestId } = render(component)
    const monthButton = getByTestId('monthButton')
    monthButton.click()
    expect(store.dispatch.mock.calls[0][0].type).toBe(setMonth.type)
  })

  it('should dispatch setYear action', () => {
    const { getByTestId } = render(component)
    const yearButton = getByTestId('yearButton')
    yearButton.click()
    expect(store.dispatch.mock.calls[0][0].type).toBe(setYear.type)
  })
})
