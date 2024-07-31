import { QuantityInput } from '@/components/quantity-input'
import { useState } from 'react'

export function Home() {
  const [quantity, setQuantity] = useState(0)

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    setQuantity((state) => state - 1)
  }
  return (
    <QuantityInput
      quantity={quantity}
      incrementQuantity={incrementQuantity}
      decrementQuantity={decrementQuantity}
    />
  )
}
