import React from 'react'

const CartContext = React.createContext({
   item: [],
   totalAmount: 0,
   addItem: (item) => {},
   remove: (id) => {}
})

export default CartContext