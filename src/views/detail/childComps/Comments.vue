<template>
    <div class="comments" >
        <comment-item v-for="(item,i) in items"  :comment="item"  ></comment-item>
    </div>
</template>
<script>

import CommentItem  from '@/views/detail/childComps/CommentItem'
export default {
    props : {
        items : {
            type : Array,
            default : []
        }
    },
    components : {
        CommentItem

    },
    data(){
        return {

        };
    }
    
}
</script>
<style scoped>

</style>