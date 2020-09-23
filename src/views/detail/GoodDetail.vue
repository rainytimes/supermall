<template>
  <div>
      <nav-bar class="detail-nav" >
          <div slot="left"><a @click="goback" >&lt;</a></div>
          <div slot="center">
              <div class="nav-btn" >
                  <div class="nav-btn-item" >商品</div>
                  <div class="nav-btn-item" >参数</div>
                  <div class="nav-btn-item" >评论</div>
                  <div class="nav-btn-item" >推荐</div>
              </div>
          </div>
          <div slot="right">+</div>
      </nav-bar>
{{id}}
  </div>
</template>
<script>

import NavBar from '@/components/common/navbar/NavBar'

export default {
  name : 'GoodDetail',
  data(){
    return {
        id : null,
    }
  },
  components : {
    NavBar
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
