<template>
  <div class="cart-list-item">
    <div class="item-btn">
      <cart-button :is-checked="product.checked" @click.native="checkClick"/>
    </div>
    <div class="item-img">
      <img :src="product.image" :alt="product.title">
    </div>
    <div class="item-info">
      <p class="info-title">
        {{product.title}}
      </p>
      <p class="info-desc">
        {{product.desc}}
      </p>
      <span class="info-price">
        ￥{{product.price}}
      </span>
      <span class="info-count">
        ×{{product.count}}
      </span>
    </div>
  </div>
</template>

<script>

import CartButton from 'components/content/cartButton/CartButton'

export default {
  name:'cartListItem',
  props:{
    product:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components:{
    CartButton 
  },
  methods:{
    checkClick(){
      this.product.checked = !this.product.checked;
    }
  }
}
</script>

<style scoped>
  .cart-list-item{
    width:100%;
    height:150px;
    border-bottom:2px solid rgb(214, 206, 214);
    padding:10px 0 10px 10px;
  }

  .item-img img{
    width:100px;
    height:130px;
    float:left;
    margin-right:10px;
    border:2px dashed var(--color-tint);
  }

  .info-title{
    font-size: 16px;
    font-weight: bold;
    margin-top:10px;
  }

  .info-desc{
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top:15px;
    margin-bottom:20px;
  }

  .info-price{
    color:#f30;
  }

  .info-count{
    margin-left:150px;
    color:rgb(139, 145, 143);
  }
</style>