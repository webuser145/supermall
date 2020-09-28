<template>
  <div class="goods_list_item" @click="itemClick">
    <img v-lazy="getImgData" :alt="goods_item.title" @load="imgLoad">
    <div class="goods_list_info">
      <p>{{goods_item.title}}</p>
      <span class="goods_price">￥{{goods_item.price}}</span>
      <span class="goods_cfav">{{goods_item.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'GoodsListItem',
  props:{
    goods_item:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    imgLoad(){
      this.$bus.$emit('imgLoadFinish');
    },
    itemClick(){
      this.$router.push('/detail/' + this.goods_item.iid);
    }
  },
  computed: {
    getImgData(){
      return this.goods_item.image || this.goods_item.show.img;
    }
  },
}
</script>

<style>
  .goods_list_item{
    position:relative;
    z-index: 10;
    width:48%;
  }
  .goods_list_item img{
    width:100%;
    border-radius: 10px;
  }

  .goods_list_info{
    font-size:15px;
    text-align: center;
  }
  .goods_list_info p{
    font-size:13px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .goods_list_info span{
    display: inline-block;
    margin:5px 0;
  }
  .goods_price{
    color:var(--color-high-text);
    padding-right:20px;
  }
  .goods_cfav{
    position: relative;
  }
  .goods_cfav::before{
    content: '';
    position: absolute;
    left:-15px;
    top:1px;
    width:14px;
    height:14px;
    background-image: url(~assets/img/collect.svg);
    background-size:14px 14px;
  }
</style>>