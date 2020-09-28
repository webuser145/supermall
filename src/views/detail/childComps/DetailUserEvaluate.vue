<template>
  <div class="user-eval-info" v-if="Object.keys(userEvalInfo).length !== 0">
    <div class="user-eval-title">
      <p>{{eval_text}}</p>
      <a href="#">{{more_eval}}</a>
    </div>

    <div class="eval-user-info">
      <img :src="userEvalInfo.avatar" alt="">
      <span>{{userEvalInfo.uname}}</span>
    </div>

    <div class="user-eval-content">
      <p>{{userEvalInfo.content}}</p>
      <img v-for="(item,index) in userEvalInfo.images" :src="item" alt="" :key="index"><br/>
      <span>{{time}}</span>
      <span>{{userEvalInfo.style}}</span>
      <p class="explain-info">{{userEvalInfo.explain}}</p>
    </div>


  </div>
</template>

<script>
// moment 格式化日期的插件

import moment from 'moment';


export default {
  name:'DetailUserEvaluate',
  props:{
    userEvalInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return{
      eval_text:'用户评价',
      more_eval:'更多',
      time:moment(this.userEvalInfo.time).format('YYYY-MM-DD')
    }
  }
}
</script>

<style scoped>
  .user-eval-title{
    padding:15px 0;
    border-bottom: 2px solid rgb(228, 222, 228);
    display: flex;
    font-size: 13px;
  }

  .user-eval-title p{
    flex:1;
    margin-left:20px;
  }

  .user-eval-title a{
    margin-right:20px;
    color:rgb(53, 103, 211);
  }

  .eval-user-info{
    margin:10px;
    position: relative;
  }

  .eval-user-info img{
    height:50px;
    border:2px solid rgb(247, 198, 230);
    border-radius: 50%;
  }
  .eval-user-info span{
    font-size: 16px;
    font-family: KaiTi;
    position: absolute;
    top: 17px;
    left: 70px;
  }

  .user-eval-content{
    padding-bottom:15px;
    border-bottom: 2px solid rgb(228, 222, 228);
    margin:0 10px;
  }

  .user-eval-content p{
    font-size: 13px;
    color:rgb(209, 207, 209);
    margin-bottom:10px;
  }

  .user-eval-content img{
    height:100%;
    width:25%;
    margin-right: 5px;

  }
  .user-eval-content span{
    font-size: 12px;
    margin-right: 10px;
  }

  .user-eval-content .explain-info{
    color:#303;
    margin-top:10px;
    margin-left:-5px;
  }

</style>