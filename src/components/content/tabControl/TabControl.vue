<template>
  <div class="tab-control">
    <div class="tab-control-item" 
    v-for="(item,index) in titles"
    :class="{active:index === fontColorIndex}"
    @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabControl',
  data(){
    return {
      fontColorIndex:0
    }
  },
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    itemClick(index){
      this.fontColorIndex = index;
      this.$emit('tabClick',index);
    }
  }
}
</script>

<style>
  .tab-control{
    display:flex;
    text-align: center;
    height:40px;
    line-height:40px;
    font-size:15px;
    background-color:#fff;
  }
  .tab-control-item{
    flex:1;
  }
  .active{
    color:var(--color-high-text);
  }

  .active span{
    padding:5px;
    border-bottom:3px solid var(--color-tint);
  }

</style>>