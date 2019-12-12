
import React, { useContext } from "react"
import { GlobalDispatchContext } from "../context/GlobalContextProvider"
import { GlobalStateContext } from "../context/GlobalContextProvider"

const Trial = () => {
  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);
  console.log(state);
  return (
  
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
        <h1>
            See your Local Storage for State Detail
        </h1>

      <h2>  {state.books.map(
        book => (
          <li>
            {book.title} -- {book.price}
          </li>
        )
      )}  </h2>
      <button onClick = { () => { dispatch({type: 'ADD_BOOK', book: {title: "book3", price: 520}}) }} > Add Book </button>
      <button onClick = { () => { dispatch({type: 'DELETE_BOOK', index: 0 }) }} > Delete Book </button>
    </div>
 
  )
}

export default Trial
