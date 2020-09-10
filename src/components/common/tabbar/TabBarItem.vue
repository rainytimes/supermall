<template>
    <div class="tab-bar-item"  align="center" @click="go" >

      <router-link :to="path" active-class="" >
        <div  v-if="isActive">
          <slot name="item-icon-active" ></slot>
        </div>

        <div v-else>
              <slot  name="item-icon-unactive" ></slot>
        </div>


        <div :style="activeStyle" >
           <slot name="item-text"  ></slot>
        </div>
      </router-link>
    </div>
</template>

<script>



export default {

    props : {
      path : String,
      activeColor : {
          type : String,
          default : 'red'
      }

    },
    data(){
      return {


      };
    },
    computed : {
      isActive : {
        get(){
          return this.$route.path.indexOf(this.path) == 0;
        },
        set(){

        }
      },
      activeStyle(){
        return this.isActive ? {
          color :  this.activeColor
        } : {}
      }

    },

    methods :{
      go(){
        this.isActive = true;
      }
    }

}
</script>

<style scoped>


.tab-bar-item {
  flex : 1;
  font-size:14px;
}


.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin: 3px 0px 2px 0px;
  vertical-align: middle;
}



</style>
