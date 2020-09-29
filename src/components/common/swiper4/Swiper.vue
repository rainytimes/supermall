<template>
  <swiper class="swiper" :options="swiperOption" ref="swiper"

    :auto-update="true"
    :auto-destroy="true"
    :delete-instance-on-destroy="true"
    :cleanup-styles-on-destroy="true"


   >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
    <!--
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    -->
  </swiper>
</template>

<script>

 import { Swiper, SwiperSlide,directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
    name: 'swiper-example-pagination-fraction',
    title: 'Fraction pagination',
    components: {
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
          },
          navigation: {
           // nextEl: '.swiper-button-next',
            //prevEl: '.swiper-button-prev'
          },
          on:{
            init: function () {
                console.log('swiper initialized');
            },
            // 使用es6的箭头函数，使this指向vue对象
            click: ()=>{

              console.log('=================click=================');

            },
            slideNextTransitionEnd: ()=>{
              //alert('切换结束了');

              //判断到最后了，那么提交事件
              var swiper =  this.getSwiper();
              console.log(swiper.activeIndex  +"======="+swiper.isEnd);
              this.$emit('end');

            },
            transitionStart : ()=>{
              var swiper =  this.getSwiper();
              console.log(swiper.activeIndex  +"===transitionStart===="+swiper.isEnd);
            }
          }

        }
      }
    },

    methods : {
      getSwiper(){
        return  this.$refs.swiper.$swiper;
      },
      slideNextTransitionEnd(){
       // console.log('=================slideNextTransitionEnd=================');
      },
      slideChangeTransitionStart(){
        //  console.log('=================slideChangeTransitionStart=================');
      },
      onSwiperSlideChangeTransitionStart(){
          console.log('=================onSwiperSlideChangeTransitionStart=================');
      },
      handleSwiperReadied(){
          //console.log('=================handleSwiperReadied=================');
      },
      touchStart(){
       // console.log('=================touchStart=================');
      },

    }
  }
</script>
<style   scoped>
.swiper {
  height: 300px;
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: $font-size-huge * 2;
    background-color: $white;
  }
}
</style>
