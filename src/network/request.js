import axios from 'axios';
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/h8',
    timeout: 5000
  })
// axios拦截器
// 请求拦截
instance.interceptors.request.use(config => {
  return config;
},error => {
  // console.log(error);
})

// 响应拦截

instance.interceptors.response.use(res => {
  // console.log(res);
  // 拦截掉服务器返回的没用的信息
  return res.data;
},error => {
  console.log(error);
})

  // instance本身就返回一个Promise,所以可以直接返回并使用
  return instance(config);
}