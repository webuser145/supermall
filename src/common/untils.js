  // debounce:降频函数/防抖函数
export function  debounce(func,delay=50){
  // timer是要进行改变的，因此不能用const进行定义
  let timer = null;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this,args);
    },delay)
  }
}