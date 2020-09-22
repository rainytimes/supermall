<template>
  <div class="panelList"  >

      <div class="panelListItem"  v-for="(item,index) in items" >
          <a :href="item.link" :title="item.t">
            <div>
                <img :src="prefix + item.img"  @load="imageLoad"  >
            </div>
            <div class="title" >
                 {{subTitle(item.t)}}
            </div>
            <div class="price" >
                 ¥{{showPrice(item.jp)}}
            </div>
          </a>



      </div>


  </div>

</template>
<script>
export default {
  data(){
    return {

    }
  },
  props : {
    items : Array,
    prefix : String
  },
  methods : {
    subTitle(title){
      if(title.length > 30){
        return title.substring(0,28)+'...';
      }else{
        return title;
      }

    },
    showPrice(jp){
      return jp/100;
    },

    imageLoad(){
     this.$EventBus.$emit('imageLoad');
    }
  }
}
</script>

<style  scoped>

/******
  .panelList{

    background-color: #EEEEEE;

  }

  .panelListItem{
      text-align: center;
      display : inline-block;
      width : 50%;
      padding: 5px 5px 5px 0px;

  }

  .panelListItem img{
      width:90%;
      height: 200px;
      border-radius: 5px;
  }


  .panelListItem .title{
    font-size: 14px;
    text-align: left;
    padding: 0px 5px 0px 15px;
  }

 .panelListItem .price{
    font-size: 24px;
    text-align: left;
    padding: 0px 5px 0px 15px;
    color: red;
  }*** */


  .panelList{

    background-color: #EEEEEE;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }

  .panelListItem{
      width : 48%;

  }

  .panelListItem img{
      width:100%;
      height: 100%;
      border-radius: 5px;
  }

.panelListItem .title{
    font-size: 14px;
    text-align: left;
    padding: 0px 5px 0px 15px;
  }

 .panelListItem .price{
    font-size: 24px;
    text-align: left;
    padding: 0px 5px 0px 15px;
    color: red;
  }

</style>
