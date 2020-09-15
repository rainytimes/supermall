import axios from 'axios';


const axiosInst = axios.create({
  baseURL : 'http://123.207.32.32:8000',
  timeout : 5000
});


const myAxiosInst = axios.create({
  baseURL : 'http://localhost:3333',
  timeout : 5000
});

export function request(config,success,failure){

  //发送真正的网络请求

  // return new Promise((resolve,reject)=>{
  //   axiosInst(config)
  //   .then(res=>{
  //     resolve(res);
  //   }).catch(error=>{
  //     reject(error);
  //   });
  // });



  //拦截器
  axiosInst.interceptors.request.use(config=>{
    //console.log("==========request====");
    //console.log(config);
    return config;
  },error =>{
    console.log(error);
  });


  axiosInst.interceptors.response.use(result=>{
    //console.log(result.data);
    return result.data;
  },error =>{
    console.log(error);
  });

  return axiosInst(config);
}










export function myRequest(config,success,failure){

  myAxiosInst.interceptors.response.use(result=>{
    return result.data;
  },error =>{
    console.log(error);
  });

  return myAxiosInst(config);
}
