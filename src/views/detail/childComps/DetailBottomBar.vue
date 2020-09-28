<template>
  <div class="detail-bottom-bar">
    <div class="bottom-bar bar-left">
      <span>&#xe61a;</span>
      <span>客服</span>
      <span>&#xe600;</span>
      <span>店铺</span>
      <span>&#xe60f;</span>
      <span>收藏</span>
    </div>
    <div class="bottom-bar bar-right">
      <span @click="addShopCart">加入购物车</span>
      <span>购买</span>
    </div>
  </div>
</template>

<script>

export default {
  name: "DetailBottomBar",
  methods:{
    addShopCart(){
      this.$emit('addShopCart');
    }
  }
};
</script>

<style scoped>
@import "~assets/css/tabbar_icon.css";
.detail-bottom-bar {
  height: 49px;
  background-color: #fff;
  position: relative;
  border-top: 1px solid rgb(209, 207, 212);
  display:flex;
  line-height:49px;
}

.bottom-bar{
  flex:1;
  margin-left:10px;
}
.bar-left span{
  padding-right:1px;
}

.bar-left span:nth-of-type(odd){
   font-family: "iconfont";
   margin-top:10px;
}

.bar-right span{
  padding:16px 5px;
}
.bar-right span:nth-of-type(1){
  background-color:rgb(238, 225, 44);
  font-size: 15px;
}

.bar-right span:nth-of-type(2){
  padding:12px;
  background-color:rgb(248, 27, 119);
  color:#fff;
}


</style>>