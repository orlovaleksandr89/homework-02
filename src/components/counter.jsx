import React from 'react'

const Counter = ({ id, name, value, onIncrement, onDecrement, onDelete }) => {
  const formCount = () => {
    return value === 0 ? 'Ноль' : value
  }
  const getBadgeClass = () => {
    let classes = 'badge m-2 bg-'
    classes += value === 0 ? 'danger' : 'primary'
    return classes
  }

  return (
    <div>
      <h5>{name}</h5>
      <span className={getBadgeClass()}>{formCount()}</span>
      <button
        onClick={() => onIncrement(id)}
        className='btn btn-secondary btn-sm'
      >
        Increment
      </button>
      <button
        onClick={() => onDecrement(id)}
        className='btn btn-secondary btn-sm m-2'
      >
        Decrement
      </button>
      <button
        className='btn btn-danger btn-sm m-2'
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  )
}

export default Counter
