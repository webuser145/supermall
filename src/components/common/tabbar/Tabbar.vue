<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabbar"
};
</script>

<style>
div#tab-bar {
  height: 49px;
  display: flex;
  background-color: rgb(229, 230, 228);
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>