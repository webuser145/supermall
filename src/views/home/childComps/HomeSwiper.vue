<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title" @load="swiperLoadFinish"/>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>

import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  props:{
    banners:{
      type:Array,
      default:() => {
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    swiperLoadFinish(){
      this.$emit('swiperLoad');
    }
  }
};
</script>

<style>
</style>