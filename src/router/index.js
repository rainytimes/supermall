import Vue from 'vue';
import VueRouter from 'vue-router'

// import Home from 'views/home/Home';
// import Category from 'views/category/Category';
// import Trolley from 'views/trolley/Trolley';
// import Profile from 'views/profile/Profile';

const Home = ()=> import('views/home/Home');
const Category = ()=> import('views/category/Category');
const Trolley = ()=> import('views/trolley/Trolley');
const Profile = ()=> import('views/profile/Profile');


Vue.use(VueRouter);

const routes = [
  {
    path : '',
    redirect : '/home'
  },
  {
    path : '/home',
    component : Home
  },
  {
    path : '/category',
    component : ()=>import('../views/category/Category.vue')
  },
  {
    path : '/profile',
    component : ()=>import('../views/profile/Profile.vue')
  },
  {
    path : '/trolley',
    component : ()=>import('../views/trolley/Trolley.vue')
  }
];

const router = new VueRouter({
  routes,
  mode : 'history'

});

export default  router;
