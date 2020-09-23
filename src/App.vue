<template>
  <div id="app">
    <keep-alive  exclude="GoodDetail" >
        <router-view></router-view>
    </keep-alive>
    <main-tab-bar class="maintabbar" />

  </div>
</template>

<script>

 import 'assets/css/base.css'

import MainTabBar from 'components/content/mainTabbar/MainTabBar.vue'

export default {
  name: 'App',
  components: {
    MainTabBar
  }

}
</script>

<style scoped>
.maintabbar{
  height: 47px;
}
</style>
