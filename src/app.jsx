import React, { useState } from 'react'

import Counters from './components/Counters'
import NavBar from './components/NavBar'

function App() {
  const initialState = [
    { value: 0, id: 1, name: 'Ложка' },
    { value: 0, id: 2, name: 'Вилка' },
    { value: 0, id: 3, name: 'Тарелка' },
    { value: 0, id: 4, name: 'Стартовый набор минималиста' },
    { value: 0, id: 5, name: 'Ненужные вещи' },
  ]

  const [counters, setCounters] = useState(initialState)

  const deleteCounter = (id) => {
    const filteredCounters = counters.filter((c) => c.id !== id)
    setCounters(filteredCounters)
  }
  const resetHandler = () => {
    console.log('reset')
    setCounters(initialState)
  }
  const incrementHandle = (id) => {
    const counter = counters.find((c) => c.id === id)
    counter.value += 1
    setCounters([...counters])
  }

  const decrementHendler = (id) => {
    const counter = counters.find((c) => c.id === id)

    if (counter.value > 0) counter.value -= 1
    setCounters([...counters])
  }
  return (
    <div className='col-lg-8 mx-auto p-3 py-md-5'>
      <main>
        <NavBar totalItems={counters.reduce((acc, c) => acc + c.value, 0)} />
        <Counters
          counters={counters}
          onIncrement={incrementHandle}
          onDecrement={decrementHendler}
          onDelete={deleteCounter}
          onReset={resetHandler}
        />
      </main>
    </div>
  )
}

export default App
