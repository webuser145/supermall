<template>
  <div class="cart">
    <nav-bar class="cart_bar">
      <div slot="center">购物车({{cartListLen}})</div>
    </nav-bar>

    <cart-list :cartList="cartList"/>

    <cart-bottom-bar />
  </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'
import {mapGetters} from 'vuex';

import CartList from './childComps/cartList'
import CartBottomBar from './childComps/CartBottomBar'

export default {
  name:'Cart',
  components:{
    NavBar,
    CartList,
    CartBottomBar 
  },
  computed:{
    // 语法一：
    ...mapGetters(['cartListLen','cartList'])
    // 语法二：
    // ...mapGetters({
    //   len:'cartListLen',
    //   list:'cartList'
    // })
  }
}
</script>

<style scoped>
  .cart_bar{
    background-color:var(--color-tint);
    color:#fff;
    font-weight: bold;  
  }

  .cart{
    height:100vh;
  }
</style>>