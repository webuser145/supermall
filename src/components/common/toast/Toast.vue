<template>
  <div class="toast" v-show="isShow">
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name:'Toast',
  // props:{
  //   message:{
  //     type:String,
  //     default:''
  //   },
  //   show:{
  //     type:Boolean,
  //     default:false
  //   }
  // },
  data(){
    return {
      message:'',
      isShow:false
    }
  },
  methods:{
    show(message,delay = 2000){
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = '';
      },delay)
    }
  }
}
</script>

<style scoped>
  .toast{
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background-color:rgba(0,0,0,.75);
    color:#fff;
    padding:8px 10px;
    z-index:999;
  }
</style>>