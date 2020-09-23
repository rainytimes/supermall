<template>
    <div class="detail-nav-item" :class="{ active : selected}" >
             {{title}}
    </div>
</template>
<script>
export default {
    props : {
        title : String,
        index : {
            type : Number,
            default : -1
        }
    },
    data(){
        return {
           
        };
    },
    computed : {
         selected(){
             return this.$parent.currentIndex == this.index;
         }
    }
}
</script>
<style scoped>

    .detail-nav-item{
        font-size: 13px;
        line-height : 40px;
        vertical-align:bottom;
    }

    .active{
        color : red;
    }
</style>