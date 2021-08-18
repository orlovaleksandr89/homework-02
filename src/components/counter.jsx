import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  // const tags = ['tag1', 'tag2', 'tag3']
  const formCount = () => {
    return count === 0 ? 'Ноль' : count
  }
  const getBadgeClass = () => {
    let classes = 'badge m-2 bg-'
    classes += count === 0 ? 'danger' : 'primary'
    return classes
  }

  // const renderTags = () => {
  //   return tags.map((tag) => <li key={tag}>{tag}</li>)
  // }
  const incremetnHandle = (prodId) => {
    setCount((prev) => prev + 1)
  }

  const decrementHendler = (prodId) => {
    if (count === 0) return setCount(0)
    return setCount((prev) => prev - 1)
  }
  return (
    <div>
      {/* {(tags.length === 0 && 'Тегов не найдено') || renderTags()} */}

      <span className={getBadgeClass()}>{formCount()}</span>
      <button
        onClick={() => incremetnHandle({ id: 1 })}
        className='btn btn-secondary btn-sm'
      >
        Increment
      </button>
      <button
        onClick={() => decrementHendler({ id: 1 })}
        className='btn btn-secondary btn-sm m-2'
      >
        Decrement
      </button>
    </div>
  )
}

export default Counter
