<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'HomeRecommendView',
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
  .recommend{
    display:flex;
    text-align: center;
    border-bottom:10px solid #eee;
  }
  .recommend-item{
    flex:1;
    padding:10px 0 20px;
  }
  .recommend-item img{
    width:75px;
    height:75px;
    margin-bottom:5px;
  }
  .recommend-item p{
    font-size:14px;
  }

</style>>