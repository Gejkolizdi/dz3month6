


import countStore from "./store/store"

function App() {
  const count = countStore((state) => state.count)
  const incrementCount = countStore((state) => state.incrementCount)
  const decrementCount = countStore((state) => state.decrementCount)
  const reset = countStore((state) => state.reset)

  return (
    <>
      <h1>{count}</h1>

      <button onClick={incrementCount}>+5</button>
      <button onClick={decrementCount}>-5</button>
      <button onClick={reset}>reset</button>
    </>
  )
}

export default App
