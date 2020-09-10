<template>
      <div class="tab-bar" >

            <slot>

            </slot>


      </div>
</template>

<script>
export default {
    data(){
      return {

      };
    }


}
</script>

<style scoped>

.tab-bar{
  display: flex;
  height: 49px;
  background-color: #f6f6f6;
  position: fixed;
  left:0px;
  right: 0px;
  bottom: 0px;
  box-shadow: 0px -3px 1px rgba(100,100,100,.2);
}


</style>
