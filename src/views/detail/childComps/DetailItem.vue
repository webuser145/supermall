<template>
  <div>
    <nav-bar>
      <div slot="left"
      class="back_btn"
      @click="backHome">
        <img src="~assets/img/back.svg" alt="返回">
      </div>
      <div slot="center" class="detail">
        <div class="detail-item"
         v-for="(item,index) in title" 
         :key="item"
         :class="{active:message_cut_index === index}"
         @click="messageCutClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailItem",
  components: {
    NavBar,
  },
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      message_cut_index:0
    };
  },
  methods:{
    messageCutClick(index){
      this.message_cut_index = index;
      this.$emit('mesCutClick',index);
    },
    backHome(){
      this.$router.back();
    }
  }
};
</script>

<style scoped>

.detail {
  display: flex;
  font-size: 14px;
}
.detail-item {
  flex: 1;
}
.active{
  color: var(--color-high-text);
}
.back_btn img{
  height: 18px;
  margin-top:13px;
}

</style>