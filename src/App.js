import React from 'react'
import Date, { Day, Month, Year } from './features/date/Date'
import Controls from './components/Controls'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.App} data-testid="app">
      <Date />
      <Day />
      <Month />
      <Year />
      <Controls />
    </div>
  )
}

export default App
