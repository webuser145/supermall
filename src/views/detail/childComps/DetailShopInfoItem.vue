<template>
    <div class="shop-sells">
      <span class="all-sells">
        <slot name="shop_sells"></slot>
      </span>
      <span class="all-sells-name">
        <slot name="sells_name"></slot>
      </span>
    </div>
</template>

<script>
export default {
  name: "DetailShopInfoItem",
};
</script>

<style scoped>
.shop-sells {
  margin: 15px 0 0 20px;
  display: inline-block;
}

.all-sells {
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color:#f30;
}
.all-sells-name {
  font-size: 10px;
  font-weight: bold;
}
</style>>