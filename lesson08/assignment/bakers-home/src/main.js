import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.scss';
import IndexView from './components/IndexView.vue';
import RecipesView from './components/RecipesView.vue';
import CommunityView from './components/CommunityView.vue';
import FaqView from './components/FaqView.vue';


Vue.use(VueRouter);

const routes = [
  { 
    path: '/', 
    name: 'Index',
    component: IndexView
  },
  {
    path: '/RecipesView',
    name: 'Recipes',
    component: RecipesView
  },
  {
    path: '/CommunityView',
    name: 'Community',
    component: CommunityView
  },
  {
    path: '/FaqView',
    name: 'FAQ',
    component: FaqView
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
