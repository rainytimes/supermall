export function  debounce(fn,delay=300){
  var timer = null;
  return function(...args){
    if(timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(()=>{
      fn.apply(this,args);
    },delay);
  }
}
