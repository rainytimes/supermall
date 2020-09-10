<template>
  <div class="recommend" >
    <div v-for="item in items" class="recommend-item">
      <a :href="item.link" >
        <img :src="item.image"  >
        <div>{{item.title}}</div>
      </a>
    </div>

  </div>

</template>
<script>
export default {
  data() {
    return {

    }
  },
  props : {
    items : Array
  }

}
</script>

<style scoped>

.recommend{
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 14px;
  padding: 10px 0px 10px 0px;
  border-bottom: 8px solid #eee;
}

.recommend-item{
  flex: 1;
}

.recommend-item img{
  width: 70px;
  height: 70px;

}



</style>
