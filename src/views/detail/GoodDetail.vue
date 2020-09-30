<template>
  <div>
      <nav-bar class="detail-nav" >
          <div slot="left"><a @click="goback" >&lt;</a></div>
          <div slot="center">
              <detail-navbar :titles="titles" ></detail-navbar>
          </div>
          <div slot="right">+</div>
      </nav-bar>

      <good-swiper class="good-swiper" :items="mainimages"  ></good-swiper>
      <price :price="price"></price>

  </div>
</template>
<script>


import NavBar from '@/components/common/navbar/NavBar'
import GoodSwiper from '@/components/common/swiper4/Swiper'

import DetailNavbar from './childComps/DetailNavbar'
import Price from '@/views/detail/childComps/Price'

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
    GoodSwiper,
    Price
  },
  methods : {
    goback(){
      this.$router.go(-1);
    },
    getGoodData(id){
      goodDetail(id)
      .then(data=>{
        this.data = data;
      });
    }
  },
  computed : {
    mainimages(){
      let imgs =  this.data && this.data.mainimages  ? this.data.mainimages : [];
      return imgs;
    },
    price(){
      return this.data && this.data.price ? this.data.price : {};
    }
  },


  created(){
    this.id = this.$route.params.id;
    this.getGoodData(this.id);
  }



}
</script>
<style  scoped>

.detail-nav {
  background-color: #ddd;
}

.nav-btn {
  display: flex;

}


.nav-btn-item {
  flex: 1;
}

</style>
<style>




.good-swiper .swiper-pagination {
  text-align: right;
  color: white;
  font-weight: bold;
  font-size: 20px;
}


.good-swiper .swiper-pagination-current{
  font-size : 24px;
}


.good-swiper .swiper-pagination-body{
 background-color : #414040;
 width: 50px;
 display: inline-block;
 border-radius:10px 0px 0px 10px;
 text-align: left;
 padding-left: 15px;
 opacity : 0.8;

}

.good-swiper .swiper-pagination-fraction .swiper-pagination-total{
 background-color : #b8b6b6;
}


</style>
