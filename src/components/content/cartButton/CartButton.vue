<template>
  <div class="cart-button" :class="{checked:isChecked}">
    <img src="~assets/img/tick.svg" alt="" :class="{checked:isChecked}">
  </div>
</template>

<script>
export default {
  name:'CartButton',
  props:{
    isChecked:{
      type:Boolean,
      default:true
    }
  }
}
</script>

<style scoped> 
  .cart-button{
    width:20px;
    height:20px;
    position:absolute;
  }

  .cart-button img{
    display:none;
  }

  .cart-button .checked{
    background-color:#f30;
    display:block;
    border:2px solid #f30;
  }
</style>>