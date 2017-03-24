import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Android from '@/components/Android';
import Web from '@/components/Web';
import Node from '@/components/Node';
import Article from '@/components/Article';
import About from '@/components/About';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/Android',
      component: Android
    },
    {
      path: '/Web',
      component: Web
    },
    {
      path: '/Node',
      component: Node
    },
    {
      path: '/About',
      component: About
    },
    {
      path: '/article/:id',
      component: Article
    }

  ]
});
