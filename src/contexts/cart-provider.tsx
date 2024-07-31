import {
  addItemAction,
  checkoutCartAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
  Item,
  OrderInfo,
  removeItemAction,
} from '@/reducers/cart/actions'
import { cartReducer, Order } from '@/reducers/cart/reducer'
import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { version } from '../../package.json'
import { useNavigate } from 'react-router-dom'

export interface CartContextType {
  cart: Item[]
  orders: Order[]
  addItem: (item: Item) => void
  removeItem: (itemId: Item['id']) => void
  incrementItemQuantity: (itemId: Item['id']) => void
  decrementItemQuantity: (itemId: Item['id']) => void
  checkout: (order: OrderInfo) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        `@coffee-delivery:cart-state-${version}`,
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return cartState
    },
  )

  const navigate = useNavigate()

  const { cart, orders } = cartState

  function addItem(item: Item) {
    dispatch(addItemAction(item))
  }

  function removeItem(itemId: Item['id']) {
    dispatch(removeItemAction(itemId))
  }

  function incrementItemQuantity(itemId: Item['id']) {
    dispatch(incrementItemQuantityAction(itemId))
  }

  function decrementItemQuantity(itemId: Item['id']) {
    dispatch(decrementItemQuantityAction(itemId))
  }

  function checkout(order: OrderInfo) {
    dispatch(checkoutCartAction(order, navigate))
  }

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState)

      localStorage.setItem(`@coffee-delivery:cart-state-${version}`, stateJSON)
    }
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        addItem,
        cart,
        orders,
        incrementItemQuantity,
        decrementItemQuantity,
        removeItem,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
