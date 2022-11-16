import Header from './Header'

function App () {
  const arr = [1, 2, 3, 4, 5, 6]
  return (
    <>
      <h1>What is this place</h1>
      <p>Another element</p>
      <p>This is a list of elements</p>
      <ul>
        {arr.map(x => (
          <li>{x}</li>
        ))}
      </ul>
      <Header p1='"To live is to risk it all"' p2='-Rick sanchez' />
    </>
  )
}

export default App

/* __concepts__ */
// fragment encloser

