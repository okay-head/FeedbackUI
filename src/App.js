import Header from './Header'
import Card from './Card'
import data from './data'
import { useState } from 'react'
import Stats from './Stats'
import Form from './Form'
import About from './pages/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Post from './pages/Post'
import NotFound from './pages/NotFound'

function App () {
  const [feedback, setFeedback] = useState(data)

  // since we want to change the 'feedback' data, we use
  //setFeedback!
  const deleteElement = id => {
    // setFeedback(newArray)
    setFeedback(feedback.filter((item, index) => index !== id))
  }

  const addElement = text => {
    const obj = {
      fb_rating: 5,
      date: 'Some date',
      fb_title: 'Some Title',
      fb_text: text
    }

    alert('Entry added!')
    setFeedback([obj, ...feedback])
  }

  return (
    <Router>
      <Header />
      <Routes>

      {/* Index page */}
      <Route exact path='/' element = {
        <>
        <Form addElement={addElement} />
        <Stats props={feedback} />
        {/* <Cards /> */}
        {feedback.map((x, i) => {
          return (
            <Card key={i} index={i} props={x} deleteElement={deleteElement} />
            )
            // passing the test function down to card
          })}
        </>        
      }>
      </Route>

      {/* Route page */}
      <Route path='/about' element = {<About />} />

      {/* Post page */}
      <Route path = '/post/:id/:status' element={<Post />}/>

      {/*404*/}
      <Route path = '/NotFound' element ={<NotFound />} / >

      </Routes>
    </Router>
  )
}

export default App
