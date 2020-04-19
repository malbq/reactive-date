import reducer, { setDay, setMonth, setYear } from './dateSlice'

describe('dateSlice actions', () => {
  let state = {
    day: 20,
    month: 4,
    year: 2020,
  }

  it('should set day', () => {
    const setDayAction = setDay(21)
    state = reducer(state, setDayAction)
    expect(state).toEqual({
      day: 21,
      month: 4,
      year: 2020,
    })
  })

  it('should set month', () => {
    const setMonthAction = setMonth(5)
    state = reducer(state, setMonthAction)
    expect(state).toEqual({
      day: 21,
      month: 5,
      year: 2020,
    })
  })

  it('should set year', () => {
    const setYearAction = setYear(2021)
    state = reducer(state, setYearAction)
    expect(state).toEqual({
      day: 21,
      month: 5,
      year: 2021,
    })
  })
})
