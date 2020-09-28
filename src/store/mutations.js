import {
  ADD_COUNTER,
  ADD_SHOP
}from './mutations_type'

export default {
  [ADD_COUNTER](state,payload){
    payload.count++;
  },
  [ADD_SHOP](state,payload){
    payload.checked = true;
    state.cartList.push(payload);
  }
}