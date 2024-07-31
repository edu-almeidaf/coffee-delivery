import { NavigateFunction } from 'react-router-dom'

export interface Item {
  id: string
  quantity: number
}

export interface OrderInfo {
  cep: number
  street: string
  number: string
  fullAddress: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
  DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
  CHECKOUT_CART = 'CHECKOUT_CART',
}

interface AddItemActionReturn {
  type: ActionTypes.ADD_ITEM
  payload: {
    item: Item
  }
}

interface RemoveItemActionReturn {
  type: ActionTypes.REMOVE_ITEM
  payload: {
    itemId: Item['id']
  }
}

interface IncrementItemQuantityActionReturn {
  type: ActionTypes.INCREMENT_ITEM_QUANTITY
  payload: {
    itemId: Item['id']
  }
}

interface DecrementItemQuantityActionReturn {
  type: ActionTypes.DECREMENT_ITEM_QUANTITY
  payload: {
    itemId: Item['id']
  }
}

interface CheckoutCartActionReturn {
  type: ActionTypes.CHECKOUT_CART
  payload: {
    order: OrderInfo
    callback: NavigateFunction
  }
}

export type Actions =
  | AddItemActionReturn
  | RemoveItemActionReturn
  | IncrementItemQuantityActionReturn
  | DecrementItemQuantityActionReturn
  | CheckoutCartActionReturn

export function addItemAction(item: Item): AddItemActionReturn {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      item,
    },
  }
}

export function removeItemAction(itemId: Item['id']): RemoveItemActionReturn {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  }
}

export function incrementItemQuantityAction(
  itemId: Item['id'],
): IncrementItemQuantityActionReturn {
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  }
}

export function decrementItemQuantityAction(
  itemId: Item['id'],
): DecrementItemQuantityActionReturn {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  }
}

export function checkoutCartAction(
  order: OrderInfo,
  callback: NavigateFunction,
): CheckoutCartActionReturn {
  return {
    type: ActionTypes.CHECKOUT_CART,
    payload: {
      order,
      callback,
    },
  }
}
