import { useContext } from 'react'
import { CartContext, CartContextType } from '@/contexts/cart-provider'

export function useCart(): CartContextType {
  return useContext(CartContext)
}
