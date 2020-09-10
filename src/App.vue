<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar />

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

<style>

</style>
