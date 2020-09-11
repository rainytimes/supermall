<template>
  <div class="tabController" >
      <div class="tabControllerItem" v-for="(item,index) in items" :class="{active : index == currentIndex}" @click="changeItem(index)" >
        <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      currentIndex : 0
    }
  },
  props : {
    items : Array
  },
  methods : {
    changeItem(index){
      this.currentIndex = index;
    }
  }
}
</script>
<style   scoped>
.tabController{
  display: flex;
  line-height: 24px;
  height: 40px;
  font-size : 15px;
  background-color: #FFFFFF;
}
.tabControllerItem {
  flex: 1;
  text-align: center;

}

.active span{
  flex: 1;
  text-align: center;
  color : var(--color-high-text);
  border-bottom: 3px solid red;
  padding: 0px 15px 3px 15px;
  box-sizing: border-box;
}

</style>
