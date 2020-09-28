<template>
  <div id="detail">
    <detail-item class="detail-nav-bar" @mesCutClick="mesCutClick" ref="nav" />
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="getContentY">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad" />
      <detail-params-info ref="params" :params-info="paramsInfo" />
      <detail-user-evaluate ref="user_eval" :user-eval-info="userEvalInfo" />
      <goods-list ref="recommend" :goods="recommend_goods" class="recommend_data" />
    </scroll>
    <detail-bottom-bar @addShopCart="addShopToCart"/>
    <back-top 
    @click.native="backTopClick" 
    v-show="isShow" />

    <!-- <toast :message="message" :show="show"/> -->
  </div>
</template>

<script>
import DetailItem from "./childComps/DetailItem";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamsInfo from "./childComps/DetailParamsInfo";
import DetailUserEvaluate from "./childComps/DetailUserEvaluate";
import DetailBottomBar from "./childComps/DetailBottomBar";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";

// import Toast from "components/common/toast/Toast";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  userEvaluate,
  getRecommend,
} from "network/detail";
import { ItemMixins,backTopMixins } from "common/mixin";
import { debounce } from "common/untils";


import { mapActions } from "vuex";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      userEvalInfo: {},
      recommend_goods: [],
      detailOffsetY: [],
      getDetailDataOffsetY: null,
      message_cut_index: 0,
      // message:'',
      // show:false
    };
  },
  components: {
    DetailItem,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailUserEvaluate,
    DetailBottomBar,
    Scroll,
    GoodsList,
    // Toast
  },
  created() {
    this.iid = this.$route.params.iid;

    // 请求详情页数据

    getDetail(this.iid)
      .then((res) => {
        // 1. 分离详情页顶部轮播图数据
        this.topImages = res.result.itemInfo.topImages;
        // 2. 详情页基本数据的获取
        let itemInfo_data = res.result.itemInfo,
          columns_data = res.result.columns,
          services_data = res.result.shopInfo.services;
        this.goods = new Goods(itemInfo_data, columns_data, services_data);
        // 3. 商铺数据的获取
        this.shop = new Shop(res.result.shopInfo);
        // 4. 获取详情页展示数据
        this.detailInfo = res.result.detailInfo;
        // 5. 参数数据的展示
        this.paramsInfo = new GoodsParam(
          res.result.itemParams.info,
          res.result.itemParams.rule
        );
        // 6. 用户评论数据展示
        this.userEvalInfo = new userEvaluate(res.result.rate);
        // // 方式二 ：pass
        //   this.detailOffsetY.push(0);
        //   this.detailOffsetY.push(this.$refs.params.$el.offsetTop);
        //   this.detailOffsetY.push(this.$refs.user_eval.$el.offsetTop);
        //   this.detailOffsetY.push(this.$refs.recommend.$el.offsetTop);

        //   console.log(this.detailOffsetY);

        // // 方式三：pass
        //   this.$nextTick(() => {
        //     // 根据最新的数据，对应的DOM已经被渲染出来了。
        //     // 但是图片依然是没有加载完(目前获取到offsetTop不包含其中的图片)

        //     this.detailOffsetY = [];

        //     this.detailOffsetY.push(0);
        //     this.detailOffsetY.push(this.$refs.params.$el.offsetTop);
        //     this.detailOffsetY.push(this.$refs.user_eval.$el.offsetTop);
        //     this.detailOffsetY.push(this.$refs.recommend.$el.offsetTop);

        //     console.log(this.detailOffsetY);
        //   })

        // 7. 给getDetailDataOffsetY 赋值

        this.getDetailDataOffsetY = debounce(() => {
          this.detailOffsetY.push(0);
          this.detailOffsetY.push(this.$refs.params.$el.offsetTop - 50);
          this.detailOffsetY.push(this.$refs.user_eval.$el.offsetTop - 50);
          this.detailOffsetY.push(this.$refs.recommend.$el.offsetTop - 50);
          this.detailOffsetY.push(Number.MAX_VALUE);

          if (this.detailOffsetY[2] + "" === "NaN") {
            this.detailOffsetY[2] = this.detailOffsetY[3];
          }
        }, 100);
      })
      .catch((error) => {
        console.log(error);
      });

    // 请求推荐数据

    getRecommend()
      .then((res) => {
        this.recommend_goods = res.data.list;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  mixins: [ItemMixins,backTopMixins],
  destroyed() {
    // 取消监听全局事件
    this.$bus.$off("imgLoadFinish", this.itemImgListener);
  },
  methods: {
    ...mapActions(['addShopCart']),
    imgLoad() {
      this.$refs.scroll.refresh();
      this.getDetailDataOffsetY();
    },
    mesCutClick(index) {
      this.$refs.scroll.scrollTo(0, -this.detailOffsetY[index], 200);
    },
    getContentY(position) {
      // 1. 获取内容滚动的y值
      const positionY = -position.y;
      // 2. 通过y值与主题中的值进行比较
      const len = this.detailOffsetY.length;
      // 方式一
      // for (let i = 0; i < len; i++) {
      //   if (
      //     this.message_cut_index !== i &&
      //     ((i < len - 1 &&
      //       positionY >= this.detailOffsetY[i] &&
      //       positionY < this.detailOffsetY[i + 1]) ||
      //       (i === len - 1 && positionY >= this.detailOffsetY[i]))
      //   ) {
      //     this.message_cut_index = i;
      //     this.$refs.nav.message_cut_index = this.message_cut_index;
      //   }
      // }

      // 方式二

      for (let i = 0; i < len - 1; i++) {
        if (
          this.message_cut_index !== i &&
          positionY >= this.detailOffsetY[i] &&
          positionY < this.detailOffsetY[i + 1]
        ) {
          this.message_cut_index = i;
          this.$refs.nav.message_cut_index = this.message_cut_index;
        }
      }

      this.isShowBackTopBtn(position);
    },
    // 添加商品到购物车
    addShopToCart(){
      const shop_cart_info = {};
      shop_cart_info.image = this.topImages[0];
      shop_cart_info.title = this.goods.title;
      shop_cart_info.desc = this.goods.desc;
      shop_cart_info.price = this.goods.realPrice;
      shop_cart_info.iid = this.iid;

      // console.log(shop_cart_info);
      
      // vuex

      // this.$store.commit('addShopCart',shop_cart_info)

      // 加入购物车显示

      // this.$store.dispatch('addShopCart',shop_cart_info).then(res => {
      //   console.log(res);
      // })

      this.addShopCart(shop_cart_info).then(res => {
        // this.show = true;
        // this.message = res;
        // setTimeout(() => {
        //   this.show = false;
        //   this.message = '';
        // },2000)

        this.$toast.show(res,2000);
      })

    }
  },
  mounted() {
    // // 1. 方式一：pass
    // this.detailOffsetY.push(0);
    // this.detailOffsetY.push(this.$refs.params.$el.offsetTop);
    // this.detailOffsetY.push(this.$refs.user_eval.$el.offsetTop);
    // this.detailOffsetY.push(this.$refs.recommend.$el.offsetTop);
    // console.log(this.detailOffsetY);
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}

.content {
  height: calc(100% - 44px - 49px);
}
.detail-nav-bar {
  position: relative;
  z-index: 10;
  background-color: #fff;
}

.recommend_data {
  margin-top: 10px;
}
</style>