import {request} from './Request';

/* const homeNetwork = {

  getHomeMultiData : ()=>{
     console.log('33333333');
  }

} */


export  function  getHomeMultiData() {
  return request({
    url : '/home/multidata'

  });
};
