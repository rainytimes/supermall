<template>
    <div class="commentItmes" >
        <div class="userInfo" >
              <img class="userimg"  :src="userimg"  >
              <span class="nickname" > {{comment.nickname}}</span>
              <heart :count="heartCount" ></heart>
              <span class="creationTime" >{{creationTime}}</span>
        </div>
        <div class="content" >
             {{comment.content}}
        </div>
    </div>
</template>
<script>
import Heart from '@/components/common/heart/Heart'
export default {
    components : {
        Heart
    },
    props : {
       comment : {
         type : Object,
         default : {}
       }
    },
    data(){
        return {

        };
    },
    computed : {
        heartCount(){
            if(this.comment && this.comment.score){
                return parseInt(this.comment.score);
            }
            return 0;
        },
        creationTime(){
            if(this.comment && this.comment.creationTime){
                return this.comment.creationTime.substring(0,10);
            }
            return '';
        },
        userimg(){
            if(this.comment && this.comment.userImageUrl){
                return 'https://'+this.comment.userImageUrl;
            }
            return 'https://misc.360buyimg.com/user/myjd-2015/css/i/peisong.jpg';
        }
    },
    
}
</script>
<style scoped>
.commentItmes{
    border-bottom: 1px solid rgba(06, 06, 06, 0.1);
    padding: 10px 0px 10px 0px;
}

.userInfo{
 font-size: 12px;
 
 padding: 5px 0px 10px 0px;

}
.nickname{
  font-weight: bold;
}
.content{
 font-size: 14px;

}
.creationTime{
    float: right;
}

.userimg{
  border-radius: 8px;
  width:16px;
  height:16px;

}

</style>