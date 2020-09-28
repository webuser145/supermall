<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else :style="isColor">
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="isColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabbaritem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#f30",
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    isColor() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style>
@import "~assets/css/tabbar_icon.css";
div.tab-bar-item {
  flex: 1;
  text-align: center;
}

div.tab-bar-item div:nth-of-type(1) {
  font-family: "iconfont";
  margin-top: 5px;
}

div.tab-bar-item div:nth-of-type(2) {
  font-size: 12px;
}
</style>>