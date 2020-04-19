import React from 'react'
import { useDispatch } from 'react-redux'
import { IconContext } from 'react-icons'
import { FaDice } from 'react-icons/fa'
import { setDay, setMonth, setYear } from '../features/date/dateSlice'

import styles from './Controls.module.scss'

export default function Controls() {
  const dispatch = useDispatch()

  const onDayClick = () => {
    dispatch(setDay(Math.floor(Math.random() * 30 + 1)))
  }

  const onMonthClick = () => {
    dispatch(setMonth(Math.floor(Math.random() * 11 + 1)))
  }

  const onYearClick = () => {
    dispatch(setYear(2000 + Math.floor(Math.random() * 20)))
  }

  return (
    <div className={styles.controls}>
      <IconContext.Provider
        value={{
          className: styles.icon,
          color: '#909090'
        }}
      >
        <button
          type="button"
          onClick={onDayClick}
          title="Generate random day"
          data-testid="dayButton"
        >
          <FaDice />
          Day
        </button>
        <button
          type="button"
          onClick={onMonthClick}
          title="Generate random month"
          data-testid="monthButton"
        >
          <FaDice />
          Month
        </button>
        <button
          type="button"
          onClick={onYearClick}
          title="Generate random year"
          data-testid="yearButton"
        >
          <FaDice />
          Year
        </button>
      </IconContext.Provider>
    </div>
  )
}
