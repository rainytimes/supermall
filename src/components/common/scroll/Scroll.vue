<template>
  <div class="scroll" ref="scroll_wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";

export default {

  props:{
    probeType : {
      type : Number,
      default : 0
    }
  },

  data() {
    return {
      scroll: null,
    };
  },

  methods:{
      scrollTo(x,y,time=500){
          this.scroll.scrollTo(x,y,time);
          this.$emit('scrolling',{x:x,y:y});
      },
      finishPullDown(){
          this.scroll.finishPullDown();
      },
      finishPullUp(){
          this.scroll.finishPullUp();
      },
      refresh(){
        this.scroll.refresh();
      }

  },

  mounted() {


    this.scroll = new BScroll(this.$refs.scroll_wrapper, {
      probeType: this.probeType,
      click : true,
      freeScroll: true,
      scrollX: true,
      scrollY: true,
      disableMouse: true,
      useTransition: true,
      //  observeDOM: true, // 开启 observe-dom 插件
        pullDownRefresh: {
        threshold: 30,
        },
        pullUpLoad: {
          threshold: 30,
        },
    //   zoom: {
    //     start: 1,
    //     min: 0.5,
    //     max: 2,
    //   },
    //   mouseWheel: {
    //     speed: 20,
    //     invert: false,
    //     easeTime: 300,
    //   },
      /*****
            scrollbar: {
            fade: true,
            interactive: false // 1.8.0 新增
            }* */
    });

    this.scroll.on("scroll", (position) => {

        if(position.y < 0){
            this.$emit('scrolling',position);
        }

    });


    this.scroll.on('pullingDown',()=>{
        this.$emit('pullingDown');
        setTimeout(()=>{
            this.scroll.finishPullDown();
        },100)
    });

    this.scroll.on("pullingUp", () => {
      this.$emit('pullingUp');

    });
    // this.scroll.on("pullingDown", () => {
    //   console.log("=========pullingDown===============");
    //   console.log(this);
    //   setTimeout(() => {
    //     var content = this.$refs.content;
    //     for (let i = 0; i < this.step; i++) {
    //       this.min--;
    //       var li = document.createElement("li");
    //       li.innerHTML = this.min + "";
    //       content.insertBefore(li, content.childNodes[0]);
    //     }

    //     this.scroll.finishPullDown();

    //     this.scroll.refresh();
    //   }, 200);
    // });
    // this.scroll.on("scrollStart", () => {
    //   console.log("=========scrollStart===============");
    // });

    // this.scroll.on("pullingUp", () => {
    //   console.log("=========pullingUp===============");
    // });
  },
};
</script>
<style scoped>
</style>
