<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item 
        v-for="(item,index) in cartList" 
        :key="index" 
        :product="item" />
    </scroll>
  </div>
</template>

<script>

import CartListItem from './cartListItem'

import Scroll from 'components/common/scroll/Scroll'

export default {
  name:'cartList',
  props:{
    cartList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    CartListItem,
    Scroll
  },
  activated(){
    this.$refs.scroll.refresh();
  }
}
</script>

<style scoped>
  .cart-list{
    height:calc(100% - 44px - 49px - 40px);
  }

  .content{
    height:100%;
    overflow: hidden;
  }
</style>