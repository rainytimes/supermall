<template>
  <div id="home" class="home" >
      <nav-bar class="home-nav" >
          <div slot="center"   >购物街</div>
      </nav-bar>
      <scroll class="homeScroll" ref="scroll" @scrolling="scrolling" :probe-type="3"  @pullingDown="pullingDown" @pullingUp="pullingUp" > 
        <home-swiper :items="banner.list" ></home-swiper>
        
        <recommend :items="recommend.list" />

        <feature-view></feature-view>

        <tab-controller :items="['流行','新款','精选']" class="tab-control"></tab-controller>

        <panel-list :items="goods" prefix="https://img12.360buyimg.com/mobilecms/s372x372_"  />

      </scroll>
      <back-top :scroll="$refs.scroll" :show="showGoTop" />

    
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

import Scroll from '@/components/common/scroll'

import BackTop from '@/components/content/backTop/BackTop'


export default {
   data(){
     return {
       banner:[],
       recommend:[],
       keywords:[],
       dKeyword:[],
       goods : [],
       showGoTop : false,
       pageNo : 1
     };
   },
   components : {
     NavBar,
     HomeSwiper,
     Recommend,
     FeatureView,
     TabController,
     PanelList,
     BackTop,
     Scroll
    

   },
   created() {

      getHomeMultiData()
      .then(result=>{
        this.banner = result.data.banner;
        this.recommend = result.data.recommend;
        this.keywords = result.data.keywords;
        this.dKeyword = result.data.dKeyword;
      });


      getHomeGoods({
         params : {
          pageNo : this.pageNo 
        }
      }).then(result=>{
         // console.log(result);
          this.goods = result.data;
      });

   




   },
   mounted(){
     var refresh = this.debounce(this.$refs.scroll.refresh,500);
     //监听事件 事件总线模型
     this.$EventBus.$on('imageLoad',()=>{
        //console.log('=====333===imageLoad=========');
        //防抖函数与节流函数

        //这里使用防抖函数处理
        //this.$refs.scroll.refresh();
        refresh();
     });
        
    

   },
   methods : {

     //防抖函数
     debounce(fn,delay=300){
        var timer = null;
        return function(...args){
          if(timer) {
            clearTimeout(timer);
          }  
          timer = setTimeout(()=>{
            fn.apply(this,args);
          },delay);
        }
     },

     scrolling(position){
        this.showGoTop = (position.y < -15);
     },
     pullingDown(){
       console.log('pullingDown===========');
     },
     pullingUp(){
       
      getHomeGoods({
        params : {
          pageNo : ++ this.pageNo 
        }
      }).then(result=>{
        //console.log(this.pageNo);
       // console.log(result);
         if(result.data){
             this.goods.push(...result.data);
         }

         //this.goods.splice(this.goods.length-1,0,result.data);



         this.$refs.scroll.finishPullUp();
      });
     }

   }
}
</script>

<style scoped>

#home {
 
  height: 100vh;
  position: relative;
}

.homeScroll{

  position: absolute;
  top:44px;
  bottom: 10px;
  left: 0px;
  right: 0px;
  overflow: hidden;

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
