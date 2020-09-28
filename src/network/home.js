import {request} from './request';
// 请求多个数据
export function getHomeMultidata(){
  return request({
    url:'home/multidata'
  }).then(res => {
    return res;
  }).catch(error => {
    console.log(error);
  })
}
// 请求商品数据
export function getHomeData(type,page){
  return request({
    url:'home/data',
    params:{
      type,
      page
    }
  }).then(res => {
    return res;
  }).catch(error => {
    console.log(error);
  })
}