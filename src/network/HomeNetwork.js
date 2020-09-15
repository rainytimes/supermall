import {request,myRequest} from './Request';
import Axios from 'axios';

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


export function getHomeGoods(){

  return myRequest({
    url : '/data/goods'
  });

}
