import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Android from '@/components/Android';
import Web from '@/components/Web';
import Node from '@/components/Node';
import Article from '@/components/Article';
import About from '@/components/About';
import Editor from '@/components/Editor';
import User from '@/components/user/User';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
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
      path: '/article/new',
      component: Editor
    },
    {
      path: '/article/update',
      component: Editor
    },
    {
      path: '/article/:id',
      component: Article
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/user',
      component: User
    }
  ]
});
