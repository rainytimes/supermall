<template>
    <div class="nav-bar" >
      <div class="left" ><slot name="left" ></slot></div>
      <div class="center" ><slot name="center" ></slot></div>
      <div class="right" ><slot name="right" > </slot></div>
    </div>
</template>


<script>
export default {


}
</script>


<style scoped>
  .nav-bar {
    display: flex;

    height: 44px;
    line-height: 44px;
    text-align: center;
    vertical-align: middle;
    font-weight: bolder;

  }

  .left, .right {
    width: 60px;
  }

  .left {
  }

  .right {
  }


  .center {
    flex: 1;
  }


</style>
