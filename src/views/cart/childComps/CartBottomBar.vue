<template>
  <div class="bottom-bar">
    <div class="bottom-bar-btn" @click="checkClick">
      <cart-button class="botton-bar-checked" :is-checked="isAllSelect"/>
      <span>全选</span>
    </div>

    <div class="total-price">
      合计:<span>{{totalPrice}}</span>
    </div>
    <div class="total-count">
      数量:<span>{{totalCount}}</span>
    </div>


    <div class="go-pay" @click="goPay">
      <a href="#">去支付</a>
    </div>
  </div>
</template>

<script>
import CartButton from 'components/content/cartButton/CartButton'

export default {
  name:'CartBottomBar',
  components:{
    CartButton
  },
  computed:{
    totalPrice(){
      return '￥' + this.$store.state.cartList.filter(item => {
        return item.checked;
      }).reduce((preValue,item) => {
        return preValue + item.price * item.count;
      },0).toFixed(2)
    },
    totalCount(){
      return '×' + this.$store.state.cartList.filter(item => item.checked).reduce((preValue,item) => {
        return preValue + item.count;
      },0)
    },
    isAllSelect(){
      if(this.$store.state.cartList.length === 0) return false;

      // 方式一：filter
      // return !(this.$store.state.cartList.filter(item => !item.checked).length);

      // 方式二：find

      return !this.$store.state.cartList.find(item => !item.checked);

      // 方式三: for循环

      // for(let item of this.$store.state.cartList){
      //   if(!item.checked){
      //     return false;
      //   }
      // }
      // return true;
    }
  },
  methods:{
    checkClick(){
      if(this.isAllSelect){  //全选
        this.$store.state.cartList.forEach(item => item.checked = false)
      }else{
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
    },
    goPay(){
      if(this.$store.state.cartList.filter(item => item.checked).length === 0){
        this.$toast.show('至少选择一件商品')
      }
    }
  }
}
</script>

<style scoped>
  .bottom-bar{
    height:40px;
    background-color:rgb(236, 236, 233);
    position: relative;
    display:flex;
    align-items: center;
  }

  .bottom-bar-btn{
    width:60px;
    margin-left:15px;
  }

  .bottom-bar-btn span{
    margin-left:25px;
    font-size: 14px;
    vertical-align:middle
  }
  .total-price,
  .total-count{
    font-size: 14px;
    margin-left: 20px;
    display:flex;
    flex:1;
  }

  .total-price span,
  .total-count span{
    color:#f30;
    font-weight:bold;
  }

  .go-pay{
    width:90px;
    background-color:#f30;
    text-align: center;
    line-height: 40px;
  }

  .go-pay a{
    color:#fff;
    font-weight: bold;  
  }
</style>>