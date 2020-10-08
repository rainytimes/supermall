<template>
    <div class="hotCommentTagStatistics" >
        <div class="item" v-for="(item,i) in items" >
            <span class="name" >{{item.name}}</span><span class="count" >({{item.count}})</span> 
        </div>
    </div>
</template>
<script>
export default {
    props : {
        items : {
            type : Array,
            default : []
        }
    },
    data(){
        return {

        };
    }
    
}
</script>
<style scoped>
    .hotCommentTagStatistics{
       
    
    }

    .item{
        margin: 5px;
        padding: 5px;
        display: inline-block;
        box-sizing: border-box;
        border-radius: 15px;
        background-color: #FCEDEB;
        color: black;
        
        
    }

    .name{
        font-size: 8px;
    }

    .count{
        font-size: 8px;
    }


</style>