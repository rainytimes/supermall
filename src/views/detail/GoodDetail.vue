<template>
  <div>
      <nav-bar class="detail-nav" >
          <div slot="left"><a @click="goback" >&lt;</a></div>
          <div slot="center">
              <detail-navbar :titles="titles" ></detail-navbar>
          </div>
          <div slot="right">+</div>
      </nav-bar>
{{id}}
  </div>
</template>
<script>


import NavBar from '@/components/common/navbar/NavBar'

import DetailNavbar from './childComps/DetailNavbar'

export default {
  name : 'GoodDetail',
  data(){
    return {
        id : null,
        titles : ['商品','参数','评论','推荐']
    }
  },
  components : {
    NavBar,
    DetailNavbar
  },
  methods : {
    goback(){
      this.$router.go(-1);
    }
  },
  created(){
    this.id = this.$route.params.id;
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
