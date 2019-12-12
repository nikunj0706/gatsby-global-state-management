import React from 'react'

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

let cartTotal = parseInt(localStorage.getItem("cartTotal"));
alert(cartTotal);
let initalBooks = [];
let initialSubTotal = 0;
if(cartTotal > 0){
    initalBooks = JSON.parse(localStorage.getItem("books"));
    initialSubTotal = parseInt(localStorage.getItem("subTotal"));
} else {
    cartTotal = 0
}

const initialState = {
    books: initalBooks,
    cartTotal: cartTotal,
    subTotal: initialSubTotal
}

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_BOOK': {
            
            localStorage.setItem("books", JSON.stringify([...state.books, action.book]));
            localStorage.setItem("cartTotal", state.cartTotal + 1);
            localStorage.setItem("subTotal", state.subTotal + action.book.price);
            return {
                ...state,
                cartTotal: state.cartTotal + 1,
                books: [...state.books, action.book],
                subTotal: state.subTotal + action.book.price
            }
        }
        case 'DELETE_BOOK': {
            let price = state.books[action.index].price;
            state.books.splice(action.index, 1);
            localStorage.setItem("books", JSON.stringify(state.books));
            localStorage.setItem("cartTotal", state.cartTotal - 1);
            localStorage.setItem("subTotal", state.subTotal - price);
            return {
                ...state,
                cartTotal: state.cartTotal - 1,
                books: state.books,
                subTotal: state.subTotal - price
            }
        }
        default:
            throw new Error("bad request")
    }
}

const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return (<GlobalStateContext.Provider value={state} >
        <GlobalDispatchContext.Provider value={dispatch}>
            {children}
        </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
    )
}

export default GlobalContextProvider;