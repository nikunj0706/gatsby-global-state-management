import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { GlobalDispatchContext } from "../context/GlobalContextProvider"
import { GlobalStateContext } from "../context/GlobalContextProvider"

const Header = ({ siteTitle }) => {
  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);
  console.log(state);
  return (
    <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
<h1>Go to Trial Page</h1>
      <h2>  {state.books.map(
        book => (
          <li>
            {book.title} -- {book.price}
          </li>
        )
      )}  </h2>
      <button onClick = { () => { dispatch({type: 'ADD_BOOK', book: {title: "book1", price: 200}}) }} > Add Book </button>
      <button onClick = { () => { dispatch({type: 'DELETE_BOOK', index: 0 }) }} > Delete Book </button>
    </div>
  </header>
  )
}

export default Header
