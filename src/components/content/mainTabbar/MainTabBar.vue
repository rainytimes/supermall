<template>

  <div>
     <tab-bar>
        <tab-bar-item path="/home" >
            <img slot="item-icon-active" src="~assets/img/tabbar/default2.png" />
            <img slot="item-icon-unactive" src="~assets/img/tabbar/default-gray2.png" />
            <div slot="item-text" >首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category" activeColor="blue" >
            <img slot="item-icon-active" src="~assets/img/tabbar/category2.png" />
            <img slot="item-icon-unactive" src="~assets/img/tabbar/category-gray2.png" />
            <div slot="item-text" >分类</div>
        </tab-bar-item>
        <tab-bar-item path="/trolley" >
            <img slot="item-icon-active" src="~assets/img/tabbar/trolley2.png" />
            <img slot="item-icon-unactive" src="~assets/img/tabbar/trolley-gray2.png" />
            <div slot="item-text" >购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile" >
            <img slot="item-icon-active" src="~assets/img/tabbar/profile2.png" />
            <img slot="item-icon-unactive" src="~assets/img/tabbar/profile-gray2.png" />
            <div slot="item-text" >我的</div>
        </tab-bar-item>
    </tab-bar>
  </div>

</template>

<script>


import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'


export default {

  data(){
    return {

    };
  },
  components : {
    TabBar,
    TabBarItem
  }

}
</script>
