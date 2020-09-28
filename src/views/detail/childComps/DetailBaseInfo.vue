<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="base-info-title">{{goods.title}}</div>
    <div class="base-info-price">
      <div class="base-info-newPrice">{{goods.newPrice}}</div>
      <del class="base-info-oldPrice">{{goods.oldPrice}}</del>
      <div v-if="goods.discount" class="base-info-discount" :style="backColorShow">{{goods.discount}}</div>
    </div>
    <div class="base-info-columns">
      <span v-for="(item,index) in goods.columns" :key="index">{{item}}</span>
    </div>
    <div class="base-info-serivices">
      <div v-for="(item,index) in goods.serivices" class="serivices-item" :key="index">
        <img :src="item.icon" alt />
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    backColorShow() {
      return {
        "background-color": this.goods.discount ? this.goods.backColor : "#fff",
      };
    },
  },
};
</script>

<style scoped>
.base-info {
  border-bottom: 4px solid rgb(228, 222, 228);
  padding: 5px;
}
.base-info-title {
  font-size: 18px;
  color: rgb(0, 0, 0);
}
.base-info-price {
  display: flex;
  margin: 5px 0 15px 0;
}

.base-info-newPrice {
  font-size: 20px;
  color: #f30;
  font-weight: bold;
  margin-right: 10px;
}

.base-info-oldPrice {
  font-size: 13px;
  margin-top: 5px;
}
.base-info-discount {
  font-size: 12px;
  margin-left: 10px;
  padding: 4px;
  border-radius: 8px;
  color: #fff;
}

.base-info-columns {
  display: flex;
  font-size: 14px;
  color: rgb(131, 129, 129);
  margin-bottom: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgb(188, 190, 192);
}

.base-info-columns span {
  flex: 1;
}

.base-info-serivices{
  display: flex;
  margin-bottom:10px;
}

.base-info-serivices .serivices-item{
  font-size:13px;
  margin-right:5px;
}
.base-info-serivices .serivices-item img{
  height:13px;
  vertical-align:bottom;
}
</style>