<template>
   <tabbar>
      <tabbaritem path="/home"  activeColor="#f49">
        <div slot="item-icon">&#xe613;</div>
        <div slot="item-icon-active">&#xe656;</div>
        <div slot="item-text">首页</div>
      </tabbaritem>
      <tabbaritem path="/category" activeColor="#f49">
        <div slot="item-icon">&#xe7f9;</div>
        <div slot="item-icon-active">&#xe623;</div>
        <div slot="item-text">分类</div>
      </tabbaritem>
      <tabbaritem path="/cart" activeColor="#f49">
        <div slot="item-icon">&#xe610;</div>
        <div slot="item-icon-active">&#xe612;</div>
        <div slot="item-text">购物车</div>
      </tabbaritem>
      <tabbaritem path="/profile" activeColor="#f49">
        <div slot="item-icon">&#xe638;</div>
        <div slot="item-icon-active">&#xe617;</div>
        <div slot="item-text">我的</div>
      </tabbaritem>
    </tabbar>
</template>

<script>
import Tabbar from "components/common/tabbar/Tabbar";
import Tabbaritem from "components/common/tabbar/Tabbaritem";
export default {
  name:'Maintabbar',
  components: {
    Tabbar,
    Tabbaritem
  }
}
</script>

<style scoped>

</style>>