
import {
  ADD_COUNTER,
  ADD_SHOP
} from './mutations_type'

export default {
  addShopCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 1. 新添加的商品
      let oldProduct = null;
      for (let item of context.state.cartList) {
        if (item.iid === payload.iid) {
          oldProduct = item;
        }
      }

      // let index = context.state.cartList.indexOf(payload);
      // if(index === -1)  // 没有找到商品

      // let oldProduct = context.state.cartList.find(item => item.iid === payload.iid);

      // 2. 判断是否有相同的商品
      if (oldProduct) {
        // oldProduct.count += 1;
        context.commit(ADD_COUNTER, oldProduct)
        resolve('当前商品数+1');
      } else {
        payload.count = 1;
        // context.state.cartList.push(payload);
        context.commit(ADD_SHOP, payload)
        resolve('添加新商品到购物车');
      }
    })
  }
}