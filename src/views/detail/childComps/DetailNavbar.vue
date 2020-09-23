<template>
    <div class="nav-bar" >
        <detail-navbar-item v-for=" (title,i) in titles" :title="title" :index="i" class="navbar-item" @click.native="clickItem(i)" />
    </div>
</template>
<script>

import DetailNavbarItem from './DetailNavbarItem'

export default {
    props:{
        titles : {
            type : Array,
            default : []
        }
    },
    data(){
        return {
            currentIndex : 0
        };
    },
    components : {
        DetailNavbarItem
    },
    methods : {
        clickItem(index){
            this.currentIndex = index;
        }
    }
    
}
</script>
<style scoped>

.nav-bar{
    display: flex;
}

.navbar-item{
    flex: 1;
}



</style>