<template>
  <swiper class="swiper" :options="swiperOption" ref="swiper" :style="swiperStyle"
    :auto-update="true"
    :auto-destroy="true"
    :delete-instance-on-destroy="true"
    :cleanup-styles-on-destroy="true"
   >

    <swiper-item   v-for="(item,i) in items"  :url="item" :index="i" :imgClass="imgClass"  ></swiper-item>


    <div class="swiper-pagination" slot="pagination" ref="pagination" ></div>
    <!--
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    -->
  </swiper>
</template>

<script>
  import $ from 'jquery'
  import { Swiper, SwiperSlide,directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  import SwiperItem from '@/components/common/swiper4/SwiperItem'

  export default {
    props : {
      swiperStyle : {
        type : Object,
        default : {}
      },
      slidesPerView : {
        type : Number,
        default : 1
      },
       imgClass : {
         type : String,
         default : ''
       },
       showPagination : {
         type : Boolean,
         default : true
       },
       items : {
         type : Array,
         default : function(){
           return [];
         }
       }
    },
    components: {
      Swiper,
      SwiperSlide,
      SwiperItem
    },
    directives: {
      swiper: directive
    },
    data() {
      return {

        swiperOption: {
          slidesPerView: this.slidesPerView,
          //spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            type: 'custom',
            renderCustom : (swiper,index,total)=>{
              if(!this.showPagination){
                return;
              }
              let pc = $(this.$refs.pagination);
              if($.trim(pc.html()).length == 0){
                //插入分页样式模板
                var indexSpan = $('<span class="swiper-pagination-current" >'+index+'</span>');
                var splitSpan = $('<span class="swiper-pagination-split" >/</span>');
                var totalSpan = $('<span class="swiper-pagination-total" >'+total+'</span>');
                var info = $('<div class="swiper-pagination-body" ></div>')
                pc.append(info);
                info.append(indexSpan);
                info.append(splitSpan);
                info.append(totalSpan);
              }else{
                 $(pc).find('.swiper-pagination-current').html(index);
                 $(pc).find('.swiper-pagination-total').html(total);
              }

            }
          },
          navigation: {
           // nextEl: '.swiper-button-next',
            //prevEl: '.swiper-button-prev'
          },
          on:{
            init: ()=> {
              console.log('swiper initialized');
             // console.log(this.$refs.swiper.$el);
              //
              //setTimeout(()=>{
               // let splitTxt = $(this.$refs.swiper.$el).find('.swiper-pagination-current');
               // console.log(splitTxt);
              //},500);

            },

            imagesReady : ()=>{
              //console.log('swiper imagesReady1111');
              let splitTxt = $(this.$refs.swiper.$el).find('.swiper-pagination-current');
              //console.log(splitTxt);
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

              //let splitTxt = $(this.$refs.swiper.$el).find('.swiper-pagination-current');
              //console.log(splitTxt);

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

    },
    computed : {


    }
  }
</script>
<style   scoped>
.swiper {
  height: 400px;
  width: 100%;
}
</style>
