import { Product } from './reducer'

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_TO_CART = 'REMOVE_ITEM_TO_CART',
  UPDATE_CART_QTY = 'UPDATE_CART_QTY',
  CLEAR_CART = 'CLEAR_CART',
}

export function addItemToCart(item: Product) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      newItem: item,
    },
  }
}

export function removeItemToCart(item_id: number) {
  return {
    type: ActionTypes.REMOVE_ITEM_TO_CART,
    payload: {
      item_id,
    },
  }
}

export function updateCart(item_id: number, item_qty: number) {
  return {
    type: ActionTypes.UPDATE_CART_QTY,
    payload: {
      item_id,
      item_qty,
    },
  }
}

export function clearCart() {
  return {
    type: ActionTypes.REMOVE_ITEM_TO_CART,
  }
}
