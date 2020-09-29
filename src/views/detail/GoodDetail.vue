<template>
  <div>
      <nav-bar class="detail-nav" >
          <div slot="left"><a @click="goback" >&lt;</a></div>
          <div slot="center">
              <detail-navbar :titles="titles" ></detail-navbar>
          </div>
          <div slot="right">+</div>
      </nav-bar>

      <good-swiper></good-swiper>


  </div>
</template>
<script>


import NavBar from '@/components/common/navbar/NavBar'
import GoodSwiper from '@/components/common/swiper4/Swiper'

import DetailNavbar from './childComps/DetailNavbar'

import {goodDetail} from '@/network/GoodDetailNetwork'

export default {
  name : 'GoodDetail',
  data(){
    return {
        id : null,
        titles : ['商品','参数','评论','推荐'],
        data : null
    }
  },
  components : {
    NavBar,
    DetailNavbar,
    GoodSwiper
  },
  methods : {
    goback(){
      this.$router.go(-1);
    },
    getGoodData(id){
      goodDetail(id)
      .then(data=>{
        console.log(data);
        this.data = data;
      });
    }
  },

  created(){
    this.id = this.$route.params.id;
    this.getGoodData(this.id);
  }



}
</script>
<style  scoped>

.detail-nav{
  background-color: #ddd;
}

.nav-btn{
  display: flex;

}


.nav-btn-item{
  flex: 1;
}

</style>
