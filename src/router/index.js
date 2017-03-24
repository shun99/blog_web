import Vue from 'vue';
import Router from 'vue-router';
import ListView from '@/components/ListView';
import Article from '@/components/Article';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: ListView
    },
    {
      path: '/:id',
      component: ListView
    },
    {
      path: '/article/:id',
      component: Article
    }
  ]
});
