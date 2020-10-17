<template>
  <swiper-slide class="swiper-item" >
      <img class="img" :class="imgClass"  :src="url" >
  </swiper-slide>
</template>
<script>

import { Swiper, SwiperSlide,directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components : {
    SwiperSlide
  },
  props : {
    imgClass : {
      type : String,
      default : ''
    },
    url : String,
    index : Number
  },
  data(){
    return {

    };
  }

}
</script>

<style   scoped>
    .img{
      width: 100%;
      height: 100%;
    }

</style>
