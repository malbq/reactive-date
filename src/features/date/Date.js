import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectDate, selectDay, selectMonth, selectYear } from './dateSlice'
import { classNames } from '../../utils'
import styles from './Date.module.scss'

const flashDuration = 500

export default function Date() {
  const date = useSelector(selectDate)
  const [flash, setFlash] = useState(false)

  useEffect(() => {
    setFlash(true)
    setTimeout(() => {
      setFlash(false)
    }, flashDuration)
  }, [date])

  return (
    <div
      className={classNames(styles.dateBlock, {
        [styles.flash]: flash,
      })}
    >
      <span className={styles.dateBlockLabel}>Full Date</span>
      {`${date.day}/${date.month}/${date.year}`}
    </div>
  )
}

export function Day() {
  const day = useSelector(selectDay)
  const [flash, setFlash] = useState('')

  useEffect(() => {
    setFlash(true)
    setTimeout(() => {
      setFlash(false)
    }, flashDuration)
  }, [day])

  return (
    <div
      className={classNames(styles.dateBlock, {
        [styles.flash]: flash,
      })}
    >
      <span className={styles.dateBlockLabel}>Day</span>
      {day}
    </div>
  )
}

export function Month() {
  const month = useSelector(selectMonth)
  const [flash, setFlash] = useState('')

  useEffect(() => {
    setFlash(true)
    setTimeout(() => {
      setFlash(false)
    }, flashDuration)
  }, [month])

  return (
    <div
      className={classNames(styles.dateBlock, {
        [styles.flash]: flash,
      })}
    >
      <span className={styles.dateBlockLabel}>Month</span>
      {month}
    </div>
  )
}

export function Year() {
  const year = useSelector(selectYear)
  const [flash, setFlash] = useState('')

  useEffect(() => {
    setFlash(true)
    setTimeout(() => {
      setFlash(false)
    }, flashDuration)
  }, [year])

  return (
    <div
      className={classNames(styles.dateBlock, {
        [styles.flash]: flash,
      })}
    >
      <span className={styles.dateBlockLabel}>Year</span>
      {year}
    </div>
  )
}
