<template>
  <div class="">
        <swiper>
          <swiper-item v-for="item in items">
              <a :href="item.link" >
                <img :src="item.image" @load="imageload" >
              </a>
          </swiper-item>
        </swiper>
  </div>
</template>
<script>
import {Swiper, SwiperItem} from '@/components/common/swiper'
export default {

  data() {
    return {

    }
  },
  props : {
    items : {
      type : Array
    }
  },
  components : {
    Swiper,
    SwiperItem
  },
  methods : {
    imageload(){
      this.$emit('load');
    }
  }


}
</script>

