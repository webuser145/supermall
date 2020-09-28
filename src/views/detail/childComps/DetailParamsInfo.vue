<template>
  <div class="params-info" v-if="Object.keys(paramsInfo).length !== 0">
    <table v-for="(table,index) in paramsInfo.sizes" :key="index" class="params-sizes">
      <tr v-for="(tr,indey) in table" :key="indey">
        <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>

    <table class="params-infos">
      <tr v-for="(info,index) in paramsInfo.infos " :key="index">
        <td>{{info.key}}</td>
        <td>{{info.value}}</td>
      </tr>
    </table>

    <div class="params-images" v-if="paramsInfo.image.length !== 0">
      <img :src="paramsInfo.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.params-info{
  border-bottom: 4px solid rgb(228, 222, 228);
  padding-bottom:10px;
}
.params-sizes,
.params-infos{
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  width: 100%;
  border-collapse: collapse;
  margin:20px 0;
}
.params-sizes tr td,
.params-infos tr td{
  font-size: 1em;
  border: 1px solid #98bf21;
  padding: 3px 7px 2px 7px;
  text-align: center;
}

.params-infos tr td:nth-of-type(2){
  color:var(--color-high-text);
}

.params-images{
  width:100%;
}
</style>