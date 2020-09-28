<template>
  <div class="shop-info">
    <div class="shop-info-log">
      <img :src="shop.logo" alt />
      <span class="shop-name">{{shop.name}}</span>
    </div>
    <detail-shop-info-item>
      <span slot="shop_sells">{{shop.sells | shopSells}}</span>
      <span slot="sells_name">{{sells_name}}</span>
    </detail-shop-info-item>
    <detail-shop-info-item>
      <span slot="shop_sells">{{shop.goodsCount | shopSells}}</span>
      <span slot="sells_name">{{goodsCount_name}}</span>
    </detail-shop-info-item>
    <detail-shop-info-item>
      <span slot="shop_sells">{{shop.fans | shopSells}}</span>
      <span slot="sells_name">{{fans_name}}</span>
    </detail-shop-info-item>
    <div class="shop-score">
      <span v-for="(item,index) in shop.score" class="shop-score-item" :class="{grade_color:item.isBetter}" :key="index">
        <span class="name">{{item.name}}</span>
        <span class="score">{{item.score}}</span>
        <span>{{item.isBetter ? '高' : '低'}}</span>
      </span>
    </div>
  </div>
</template>

<script>
import DetailShopInfoItem from "./DetailShopInfoItem";

export default {
  name: "DetailShopInfo",
  components: {
    DetailShopInfoItem,
  },
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      sells_name: "总销量",
      goodsCount_name: "全部宝贝",
      fans_name: "粉丝量"
    };
  },
  filters: {
    shopSells(count) {
      if (count > 10000) {
        count = (count / 10000).toFixed(1) + "万";
        return count;
      } else {
        return count;
      }
    }
  }
};
</script>

<style scoped>
.shop-info {
  margin-top: 25px;
  border-bottom: 4px solid rgb(228, 222, 228);
  margin-bottom: 70px;
  padding-bottom: 20px;
}
.shop-info-log {
  height: 60px;
  padding-left: 20px;
  position: relative;
}
.shop-info-log img {
  height: 50px;
  border-radius: 50%;
  border: 2px solid rgb(185, 186, 187);
}
.shop-name {
  font-size: 16px;
  font-family: KaiTi;
  position: absolute;
  top: 18px;
  left: 78px;
}

.shop-score {
  margin-left: 10px;
  font-size: 13px;
  border-top:1px solid rgb(189, 189, 189);
  padding-top:14px;
  color:#fff;
}

.shop-score-item,
.name,
.score{
  margin-right: 5px;
}

.shop-score-item{
  padding:5px;
  background-color:rgb(62, 235, 99);
  border-radius: 3px;
}

.grade_color{
  background-color:#f30;
}
</style>