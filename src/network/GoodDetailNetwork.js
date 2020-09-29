import {myRequest} from '@/network/Request'


export  function goodDetail(id){

  return myRequest({
      url : '/data/detail',
      params : {
        id : id
      }
  });
}

