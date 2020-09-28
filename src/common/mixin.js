
import { debounce } from "common/untils";

export const ItemMixins = {
  data(){
    return{
      itemImgListener:null
    }
  },
  mounted() {
    // 进行监听图片加载完成了
    const refresh = debounce(this.$refs.scroll.refresh,200);
    this.itemImgListener = () => { refresh() }
    this.$bus.$on("imgLoadFinish",this.itemImgListener)
  }
}


import BackTop from "components/content/backtop/BackTop";

export const backTopMixins = {
  data(){
    return{
      isShow: false,
      scroll_distance:800
    }
  },
  components:{
    BackTop
  },
  methods:{
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    isShowBackTopBtn(position){
      this.isShow = (-position.y) > this.scroll_distance;
    }
  }
}