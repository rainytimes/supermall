<template>
    <div class="backTop" >
            <img src="~assets/img/backtop/backtop-red.png" @click="goTop" ref="btn" :class="{imgHidden : !show }" >
    </div> 
    
</template>
<script>
export default {
    props:{
        scroll : {
            type : Object,
            default : null
        },
        show : {
            type : Boolean,
            default : false
        }
    },
    data(){
        return {

        };
    },
    methods : {
        goTop(){
            if(!this.scroll){
                return;
            }
            this.scroll.scrollTo(0,0);
        }
    } 
}
</script>
<style scoped>
.backTop{
    position:absolute;
    bottom: 40px;
    right: 10px;
}

.backTop img{
    width: 60px;
    height: 60px;
}

.imgHidden{
    display: none;
}

</style>