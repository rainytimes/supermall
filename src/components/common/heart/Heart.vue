<template>
    <div class="hearts" :containerClass="containerClass" >
        <span class="item"  :class="itemClass"  v-for="i in count ">★</span>
    </div>
</template>
<script>
export default {
    props:{
        count : {
            type : Number,
            default : 0
        },
        containerClass : {
            type : String,
            default : ''
        },
        itemClass : {
            type : String,
            default : ''
        }
    }
    
}
</script>
<style scoped>
.hearts{
    display: inline;
    padding: 0px 0px 0px 10px;
}
.item{
    color:red;
    padding:0px 3px 0px 0px;
}

</style>