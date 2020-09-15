<template>
  <div id="home" class="home" >
      <nav-bar class="home-nav" >
          <div slot="center"   >购物街</div>
      </nav-bar>

      <home-swiper :items="banner.list" ></home-swiper>
      <recommend :items="recommend.list" />

      <feature-view ></feature-view>

      <tab-controller :items="['流行','新款','精选']" class="tab-control"></tab-controller>


      <panel-list :items="goods" prefix="https://img12.360buyimg.com/mobilecms/s372x372_"  />

      <ul>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
        <li>001</li>
      </ul>


  </div>
</template>

<script>

import NavBar from '@/components/common/navbar/NavBar'

import {getHomeMultiData,getHomeGoods} from 'network/HomeNetwork.js'

import HomeSwiper from '@/views/home/childComps/HomeSwiper'

import Recommend from '@/views/home/childComps/Recommend'

import FeatureView from '@/views/home/childComps/FeatureView'

import TabController from '@/components/content/tabController/TabController'

import PanelList from '@/components/common/panellist/PanelList'


export default {
   data(){
     return {
       banner:[],
       recommend:[],
       keywords:[],
       dKeyword:[],
       goods : []
     };
   },
   components : {
     NavBar,
     HomeSwiper,
     Recommend,
     FeatureView,
     TabController,
     PanelList

   },
   created() {

      getHomeMultiData()
      .then(result=>{
        this.banner = result.data.banner;
        this.recommend = result.data.recommend;
        this.keywords = result.data.keywords;
        this.dKeyword = result.data.dKeyword;
      });


      getHomeGoods()
      .then(result=>{
          console.log(result);
          this.goods = result.data;
      });




   },
   mounted(){
    //  console.log('===mounted====1===');
    //  console.log(this.result);
    //  console.log('===mounted====2===');
   }
}
</script>

<style scoped>

#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;

}

.home-nav {

 box-shadow: 0 1px 1px rgba(100, 100, 100, .3);
 background-color: var(--color-tint);
 color :white;
 position: fixed;
 left: 0px;
 right: 0px;
 top: 0px;
 z-index: 99;
}

.tab-control{
  position:sticky;
  top : 100px;
  z-index: 100px;
}


</style>
