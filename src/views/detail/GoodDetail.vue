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
      <div class="name" ><p>{{name}}</p></div>

      <div class="dispatch" ><span class="sendTo" >送至</span><span class="adress" >{{sendTo}}</span></div>

      
      <comment :hotCommentTagStatistics="hotCommentTagStatistics" :count="commentCountStr" :comments="comments" > </comment>



  </div>
</template>
<script>


import NavBar from '@/components/common/navbar/NavBar'
import GoodSwiper from '@/components/common/swiper4/Swiper'

import DetailNavbar from './childComps/DetailNavbar'
import Price from '@/views/detail/childComps/Price'

import {goodDetail} from '@/network/GoodDetailNetwork'

import Comment from '@/views/detail/childComps/Comment.vue'

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
    Price,
    Comment,
  
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
    },
    sendTo(){
      if(!this.data){
        return "";
      }
      let area = this.data.stock.area;
      return area.provinceName+area.cityName+area.countyName;
    },
    name(){
       if(!this.data){
        return "";
      }
      return this.data.name;
    },
    hotCommentTagStatistics(){
      if(this.data && this.data.comment && this.data.comment.hotCommentTagStatistics){
        return this.data.comment.hotCommentTagStatistics;
      }
      return [];
    },
    commentCountStr(){
      if(this.data && this.data.comment && this.data.comment.productCommentSummary){
        return this.data.comment.productCommentSummary.CommentCountStr;
      }
      return '';
    },
    comments(){
      if(this.data && this.data.comment && this.data.comment.comments){
        return this.data.comment.comments;
      }
      return [];
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

.name {
  font-size: 14px;
  font-weight: bold;
}

.dispatch{
  background-color: rgb(252, 248, 248);
  padding: 15px;
  border-radius: 5px;
  border: 2px solid rgb(233, 230, 230);
  box-sizing: content-box;
  font-size: 14px;
}

.dispatch .sendTo{
  background-color: rgb(252, 248, 248);
  padding: 5px;
  border-radius: 5px;
  box-sizing: content-box;
  font-size: 14px;
  font-weight: bolder;
}

.dispatch .adress{
  background-color: rgb(252, 248, 248);
  padding: 15px;
  border-radius: 5px;
  box-sizing: content-box;
  font-size: 14px;
}





</style>
