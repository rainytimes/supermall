<template>
    <div class="commentItem" >
        <div class="userInfo" >
              <img class="userimg"  :src="userimg"  >
              <span class="nickname" > {{comment.nickname}}</span>
              <heart :count="heartCount" ></heart>
              <span class="creationTime" >{{creationTime}}</span>
        </div>
        <div class="content" >
             {{comment.content}}
        </div>
        <good-swiper :items="images" imgClass="buyerShowImg" :slidesPerView="3"  :swiperStyle="swiperStyle" :showPagination="showPagination" ></good-swiper>
    </div>
</template>
<script>
import Heart from '@/components/common/heart/Heart'
import GoodSwiper from '@/components/common/swiper4/Swiper'
export default {
    components : {
        Heart,
        GoodSwiper
    },
    props : {
       comment : {
         type : Object,
         default : {}
       }
    },
    data(){
        return {
            swiperStyle : {
              height : '130px'
            },
            showPagination:false
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
        },
        images(){
          if(this.comment && this.comment.images && this.comment.images.length > 0){
              var urls = [];
              for(let i of  this.comment.images){
                urls.push(i.imgUrl);
              }
              return  urls;
          }
          return null;
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
<style  >

.commentItem img.buyerShowImg{
  width: 120px;
  height: 120px;
}

</style>
