<template>
  <div class="price" >
        <div class="currency" >¥</div>
        <div class="currentPrice" >{{price.p}}</div>
        <div class="vipPrice" v-if="price.tpp" >¥{{price.tpp}}<span class="vipFlag">VIP价格</span></div>
  </div>
</template>
<script>
export default {
    props : {
      price : {
        type : Object,
        default(){
          return {

          };
        }
      }
    },
    data(){
      return {

      };
    }
}
</script>
<style scoped>

.price{
  display: inline-block;
}

.currency{
  font-size: 18px;
  color: red;
  display: inline-block;
}

.currentPrice{
  font-size: 26px;
  color: red;
  font-style: initial;
  display: inline-block;

}

.vipPrice{
  display: inline-block;
  padding-left: 10px;
  font-size: 16px;
  font-weight: bold;

}

.vipFlag{
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  margin: 0px 5px 0px 5px;
  padding: 2px;
  box-sizing: border-box;
  border: 1px dotted black;
}



</style>
