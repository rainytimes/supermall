<template>
    <div class="comment" >
        <div class="title" >
            <span class="icon" ></span>
            <span class="text" >评价</span>
            <span class="count" >{{count}}</span>
        </div>
        <div style="display:block;" >
            <br><br>
            <hot-comment-tag-statistics :items="hotCommentTagStatistics"  ></hot-comment-tag-statistics>
            <comments :items="comments" ></comments>


        </div>
    </div>
</template>
<script>
import HotCommentTagStatistics from '@/views/detail/childComps/HotCommentTagStatistics.vue'
import Comments  from '@/views/detail/childComps/Comments'
export default {
    components : {
      HotCommentTagStatistics,
      Comments
    },
    props:{
        count : {
            type : String,
            default : ''
        },
        hotCommentTagStatistics : {
            type : Array,
            default : []
        },
        comments : {
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
    .comment {
        background-color: rgb(252, 248, 248);
        padding: 15px;
        border-radius: 5px;
        border: 2px solid rgb(233, 230, 230);
    }

    .title{
        font-weight: bolder;
        background-color: blue;
    }

    .text{
        font-size: 18px;
        font-weight: bolder;
        line-height: 30px;
        display: block;
        float: left;
    }

    .icon {
        font-size:0;
        display: block;
        width: 10px;
        height: 30px;
        float: left;
        margin: 0px 5px 0px 5px;
        background: -webkit-gradient(linear, 0 0, 0 100%, from(rgb(238, 43, 108)), to(rgb(95, 144, 235))); /** Chrome Safari **/
    }

    .count {
        float: left;
        line-height: 30px;
        padding-left: 15px;
        font-size: 12px;
        vertical-align: bottom;
    }


</style>