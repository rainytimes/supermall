<template>

  <div class="featureView" >
        <a :href="link" >
          <img src="~assets/img/home/recommend_bg.jpg" >
        </a>
  </div>

</template>
<script>
export default {

  data(){
    return {

    }
  },
  props : {
    image : {
      type : String,
    },
    link : {
      type : String,
      default : 'http://www.baidu.com'
    }
  }
}
</script>
<style  scoped>

.featureView img{
  width: 100%;

}

</style>
