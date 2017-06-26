import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Sort from '@/components/Sort';
import Article from '@/components/Article';
import About from '@/components/About';
import Editor from '@/components/Editor';
import Tag from '@/components/Tag';
import Archive from '@/components/Archive';

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
      path: '/sort',
      component: Sort
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
      path: '/tag',
      component: Tag
    },
    {
      path: '/archive',
      component: Archive
    }
  ]
});
