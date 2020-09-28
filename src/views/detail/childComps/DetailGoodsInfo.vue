<template>
  <div class="detail-goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="goods-info-desc">
      {{detailInfo.desc}}
    </div>
    <div class="goods-info-model-img">
      <p>{{detailInfo.detailImage[0].key}}</p>
      <img v-for="(item,index) in detailInfo.detailImage[0].list" :src="item" alt="" @load="imgLoad" :key="index">
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailGoodsInfo',
  props:{
    detailInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return{
      counter:0,
      imagesLength:0
    }
  },
  methods: {
    imgLoad(){
      //判断，所有图片都加载完成了，那进行一次回调就可以了
      if(++this.counter === this.imagesLength){
        this.$emit('imgLoad');
      }
    }
  },
  watch:{
    detailInfo(){
      this.imagesLength = this.detailInfo.detailImage[0].list.length;
    }
  }
}
</script>

<style scoped>
  .detail-goods-info{
    margin-top:-50px;
  }

  .goods-info-desc{
    font-size:15px;
    font-family: KaiTi;
    font-weight: bold;
    text-align: center;
    border:2px dashed #303;
    border-left:0px;
    border-right:0px;
    padding:20px 0;
  }

  .goods-info-model-img p{
    text-align: center;
    margin:20px 0;
    font-size: 12px;
    font-weight:bold;
  }

  .goods-info-model-img img{
    width:100%;
  }
</style>