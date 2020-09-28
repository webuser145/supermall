<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control 
    :titles="tabTitles" 
    @tabClick="tabClick" 
    ref="topControl1"
    class="topControShow"
    v-show="isFixed"/>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper 
      :banners="banners" 
      @swiperLoad="swiperLoad"/>
      <home-recommend-view 
      :recommends="recommends" />
      <feature-view />
      <tab-control 
      :titles="tabTitles" 
      @tabClick="tabClick" 
      ref="topControl2"/>
      <goods-list 
      :goods="goodsCut" />
    </scroll>

    <back-top 
    @click.native="backTopClick" 
    v-show="isShow " />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";

import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import FeatureView from "./childComps/FeatureView";

import { getHomeMultidata, getHomeData } from "network/home";
import { ItemMixins,backTopMixins} from "common/mixin";

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      tabTitles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      goods_cut_index: "pop",
      topControlOffsetTop:0,
      isImgLoadFinish:false,
      isFixed:false,
      saveY:0
    };
  },
  mixins:[ItemMixins,backTopMixins],
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY);
    this.$refs.scroll.refresh();
  },
  deactivated(){
    this.saveY = this.$refs.scroll.getScrollY();
    // 取消监听全局事件
    this.$bus.$off("imgLoadFinish",this.itemImgListener);
  },
  created() {
    //1. 请求多个数据
    this.getHomeMultidata();
    //2. 请求商品数据
    this.getHomeData("pop");
    this.getHomeData("new");
    this.getHomeData("sell");
  },
  mounted() {
  },
  computed: {
    goodsCut() {
      return this.goods[this.goods_cut_index].list;
    },
  },

  methods: {
    /**
     * 事件监听的方法
     * */
    tabClick(index) {
      switch (index) {
        case 0:
          this.goods_cut_index = "pop";
          break;
        case 1:
          this.goods_cut_index = "new";
          break;
        case 2:
          this.goods_cut_index = "sell";
          break;
      }
      this.$refs.topControl1.fontColorIndex = index;
      this.$refs.topControl2.fontColorIndex = index;
    },
    contentScroll(position) {
      this.isShowBackTopBtn(position);
      this.isFixed = (-position.y) > this.topControlOffsetTop;
    },
    loadMore() {
      this.getHomeData(this.goods_cut_index);
    },
    swiperLoad(){
      if(!this.isImgLoadFinish){
        this.topControlOffsetTop = this.$refs.topControl2.$el.offsetTop;
        this.isImgLoadFinish = true;
      }
    },
    /*
     *  网络请求的方法
     *
     * */

    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeData(type) {
      const page = this.goods[type].page + 1;
      getHomeData(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishLoadMore();
      });
    },
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh; /* vh：视口高度*/
  position: relative;
}
.home-nav-bar {
  background-color: var(--color-tint);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.home-nav-bar div {
  font-size: 18px;
  color: #fff;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.topControShow{
  position: relative;
  z-index: 10;
}

</style>>