import Vue from 'vue';
import Router from 'vue-router';
import ListView from '@/components/ListView';
import Article from '@/components/Article';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/article',
      name: 'Article',
      component: Article
    },
    {
      path: '/',
      name: 'ListView',
      component: ListView
    }
  ]
});
