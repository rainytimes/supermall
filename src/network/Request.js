import axios from 'axios';


const axiosInst = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 60000
});


const myAxiosInst = axios.create({
    baseURL: 'http://localhost:4545',
    timeout: 60000
});

export function request(config, success, failure) {

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
    axiosInst.interceptors.request.use(config => {
        return config;
    }, error => {
        console.log(error);
    });


    axiosInst.interceptors.response.use(result => {
        return result.data;
    }, error => {
        console.log(error);
    });

    return axiosInst(config);
}




myAxiosInst.interceptors.response.use(result => {
    return result.data;
}, error => {
    console.log(error);
});



export function myRequest(config, success, failure) {


    return myAxiosInst(config);
}
